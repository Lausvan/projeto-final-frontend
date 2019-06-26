import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastra-fornecedor',
  templateUrl: './cadastra-fornecedor.component.html',
  styleUrls: ['./cadastra-fornecedor.component.scss']
})
export class CadastraFornecedorComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      razaoSocial: [null, Validators.required],
      nomeFantasia: [null, Validators.required],
      cnpj: [null],
      email: [null],
      endereco: [null],
      cidade: [null],
      estado: [null]
    });
  }

}
