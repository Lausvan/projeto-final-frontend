import { fornecedorDTO } from './../../../Dto/fornecedorDTO';
import { FornecedorServiceService } from './../../../services/fornecedor-service.service';
import { ProdutoServiceService } from './../../../services/produto-service.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


import { Subscription, Observable, of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-cadastra-produto',
  templateUrl: './cadastra-produto.component.html',
  styleUrls: ['./cadastra-produto.component.scss']
})
export class CadastraProdutoComponent implements OnInit {

  formulario: FormGroup;
  fornecedores = [];
  fornecedoresFiltrados: Observable<fornecedorDTO[]>;

  constructor(
    private fornecedorService: FornecedorServiceService,
    private formBuilder: FormBuilder,
    private service: ProdutoServiceService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      id: [null],
      codigoBarras: [null, Validators.required],
      nome: [null, Validators.required],
      preco: [null, Validators.required],
      fornecedor: [null, Validators.required],
      qtd: [1]
    });

    this.adicionaPesquisaFornecedor();

    this.activatedRoute.params
    .pipe(
      map(params => params.id),
      switchMap(id =>  this.service.buscarPorId(id))
    ).subscribe(fornecedor => this.updateFormulario(fornecedor));
  }

  onSubmit() {
    console.log('form', this.formulario);
    console.log('nome', this.formulario.get('nome').value);

    if (this.formulario.valid) {
      if (this.formulario.get('id').value) {
        this.service.atualizar(this.formulario.value).subscribe(() => {
          console.log('atualizou');
        });
      } else {
        this.service.cadastrar(this.formulario.value).subscribe(() => {
          console.log('criou');
        });
      }
    }

  }

  updateFormulario(produto) {
    this.formulario.patchValue({
      id: produto.id,
      codigoBarras: produto.codigoBarras,
      nome: produto.nome,
      preco: produto.preco,
      fornecedor: produto.fornecedor
    });
  }

  private adicionaPesquisaFornecedor() {
    this.formulario.get('fornecedor').valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged()
      ).subscribe(v => {
        if (typeof v === 'string') {
          this.fornecedoresFiltrados = of(v)
            .pipe(
              map(value => this.filter(value))
            );
        } else {
          this.fornecedoresFiltrados = of([]);
        }
      });
  }

  private filter(value: string): fornecedorDTO[] {
    this.fornecedorService.buscarPorNome(value).subscribe(data => {
      this.fornecedores = data;
    });

    return this.fornecedores;
  }

  formatter(fornecedor?: fornecedorDTO): string | undefined {
    return fornecedor ? fornecedor.nome : undefined;
  }

}
