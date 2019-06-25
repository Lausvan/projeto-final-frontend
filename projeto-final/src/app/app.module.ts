import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TelaInicialComponent } from './layout/tela-inicial/tela-inicial.component';
import { FornecedorComponent } from './layout/fornecedor/fornecedor.component';
import { ClienteComponent } from './layout/cliente/cliente.component';
import { ProdutoComponent } from './layout/produto/produto.component';
import { FarmaceuticoComponent } from './layout/farmaceutico/farmaceutico.component';
import { ContainerComponent } from './layout/container/container.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    TelaInicialComponent,
    FornecedorComponent,
    ClienteComponent,
    ProdutoComponent,
    FarmaceuticoComponent,
    ContainerComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
