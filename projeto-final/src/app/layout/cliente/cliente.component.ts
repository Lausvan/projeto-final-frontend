import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      nome: [null, Validators.required],
      cpf: [null, Validators.required],
      telefone: [null],
      email: [null],
      endereco: [null],
      cidade: [null],
      estado: [null],
      limiteCompra: [null, Validators.required]
    });
  }

}
