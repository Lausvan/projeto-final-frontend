import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-fornecedor',
  templateUrl: './fornecedor.component.html',
  styleUrls: ['./fornecedor.component.scss']
})
export class FornecedorComponent implements OnInit {

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
