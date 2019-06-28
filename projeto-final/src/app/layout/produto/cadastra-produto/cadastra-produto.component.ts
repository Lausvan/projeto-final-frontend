import { ProdutoServiceService } from './../../../services/produto-service.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-cadastra-produto',
  templateUrl: './cadastra-produto.component.html',
  styleUrls: ['./cadastra-produto.component.scss']
})
export class CadastraProdutoComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: ProdutoServiceService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      id: [null],
      codigoBarra: [null, Validators.required],
      nome: [null, Validators.required],
      preco: [null, Validators.required],
      fornecedor: [null, Validators.required],

      this.activatedRoute.params
      .pipe(
        map(params => params.id),
        switchMap(id =>  this.service.buscarPorId(id))
      ).subscribe(fornecedor => this.updateFormulario(fornecedor));
    });
  }

  onSubmit() {
    console.log('form', this.formulario);
    console.log('nome', this.formulario.get('nome').value);

    if (this.formulario.valid) {
      if (this.formulario.get('id').value) {
        this.service.atualizar(this.formulario.value).subscribe(() => {
          console.log('atualizou');
          this.router.navigate(['../../lista'], {relativeTo: this.activatedRoute});
        });
      } else {
        this.service.cadastrar(this.formulario.value).subscribe(() => {
          console.log('criou');
          this.router.navigate(['../../lista'], {relativeTo: this.activatedRoute});
        });
      }
    }

  }

  updateFormulario(produto) {
    this.formulario.patchValue({
      id: produto.id,
      codigoBarras: produto.razaoSocial,
      nome: produto.nome,
      preco: produto.preco,
      fornecedor: produto.fornecedor
    });
  }

}
