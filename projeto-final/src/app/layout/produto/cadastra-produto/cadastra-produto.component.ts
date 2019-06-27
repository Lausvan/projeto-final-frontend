import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastra-produto',
  templateUrl: './cadastra-produto.component.html',
  styleUrls: ['./cadastra-produto.component.scss']
})
export class CadastraProdutoComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      codigoBarra: [null, Validators.required],
      nome: [null, Validators.required],
      preco: [null, Validators.required],
      fornecedor: [null, Validators.required],
    });
  }

}
