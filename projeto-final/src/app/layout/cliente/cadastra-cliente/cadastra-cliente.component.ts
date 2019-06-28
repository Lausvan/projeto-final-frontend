import { ClienteServiceService } from 'src/app/services/cliente-service.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-cadastra-cliente',
  templateUrl: './cadastra-cliente.component.html',
  styleUrls: ['./cadastra-cliente.component.scss']
})
export class CadastraClienteComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: ClienteServiceService,
    private activatedRoute: ActivatedRoute,
    private router: Router
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
      limite: [null, Validators.required]
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
          this.router.navigate(['../../lista'], {relativeTo: this.activatedRoute});
        });
      }
    }

  }

  updateFormulario(cliente) {
    this.formulario.patchValue({
      id: cliente.id,
      nome: cliente.nome,
      documento: cliente.documento,
      endereco: cliente.endereco,
      cidade: cliente.cidade,
      estado: cliente.estado,
      email: cliente.email,
      limite: cliente.limite,
      telefone: cliente.telefone
    });
  }



}

