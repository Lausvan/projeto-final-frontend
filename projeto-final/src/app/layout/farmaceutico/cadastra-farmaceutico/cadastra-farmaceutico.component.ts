import { FarmaceuticoServiceService } from './../../../services/farmaceutico-service.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Subscription } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-cadastra-farmaceutico',
  templateUrl: './cadastra-farmaceutico.component.html',
  styleUrls: ['./cadastra-farmaceutico.component.scss']
})
export class CadastraFarmaceuticoComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: FarmaceuticoServiceService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      id:[null],
      nome: [null, Validators.required],
      telefone: [null, Validators.required],
      email: [null]
    });

    this.activatedRoute.params
    .pipe(
      map(params => params.id),
      switchMap(id =>  this.service.buscarPorId(id))
    ).subscribe(cliente => this.updateFormulario(cliente));
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
        });
      }
    }

  }

  updateFormulario(farmaceutico) {
    this.formulario.patchValue({
      id: farmaceutico.id,
      nome: farmaceutico.nome,
      email: farmaceutico.email,
      telefone: farmaceutico.telefone
    });
  }

}
