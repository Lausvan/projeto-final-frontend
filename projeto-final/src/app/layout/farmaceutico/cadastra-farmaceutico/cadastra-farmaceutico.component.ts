import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastra-farmaceutico',
  templateUrl: './cadastra-farmaceutico.component.html',
  styleUrls: ['./cadastra-farmaceutico.component.scss']
})
export class CadastraFarmaceuticoComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      nome: [null, Validators.required],
      telefone: [null, Validators.required],
      email: [null]
    });
  }

}
