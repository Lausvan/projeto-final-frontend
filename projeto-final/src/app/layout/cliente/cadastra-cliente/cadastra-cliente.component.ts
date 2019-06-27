import { ClienteServiceService } from 'src/app/services/cliente-service.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastra-cliente',
  templateUrl: './cadastra-cliente.component.html',
  styleUrls: ['./cadastra-cliente.component.scss']
})
export class CadastraClienteComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: ClienteServiceService
  ) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      id: [null],
      nome: [null, Validators.required],
      documento: [null, Validators.required],
      telefone: [null],
      email: [null, Validators.email],
      endereco: [null],
      cidade: [null],
      estado: [null],
      limiteCompra: [null, Validators.required]
    });
  }

  onSubmit() {
    this.service.cadastrar(this.formulario.value).subscribe(() => console.log('salvo'));
  }

}

