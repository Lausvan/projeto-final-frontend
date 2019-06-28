import { FornecedorServiceService } from './../../../services/fornecedor-service.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-cadastra-fornecedor',
  templateUrl: './cadastra-fornecedor.component.html',
  styleUrls: ['./cadastra-fornecedor.component.scss']
})
export class CadastraFornecedorComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: FornecedorServiceService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      id: [null],
      razaoSocial: [null, Validators.required],
      nome: [null, Validators.required],
      documento: [null],
      email: [null],
      endereco: [null],
      cidade: [null],
      estado: [null]
    });

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

  updateFormulario(fornecedor) {
    this.formulario.patchValue({
      id: fornecedor.id,
      razaoSocial: fornecedor.razaoSocial,
      nome: fornecedor.nome,
      documento: fornecedor.documento,
      endereco: fornecedor.endereco,
      estado: fornecedor.estado,
      email: fornecedor.email,
      cidade: fornecedor.cidade,
    });
  }

}
