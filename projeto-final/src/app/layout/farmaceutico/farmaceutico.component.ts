import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-farmaceutico',
  templateUrl: './farmaceutico.component.html',
  styleUrls: ['./farmaceutico.component.scss']
})
export class FarmaceuticoComponent implements OnInit {

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

  teste(){
    console.log(this.formulario.get('nome').value);
    console.log(this.formulario.get('telefone').value);
    console.log(this.formulario.get('email').value);
  }

}
