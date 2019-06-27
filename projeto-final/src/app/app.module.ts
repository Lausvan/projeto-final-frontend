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
import { ListaFornecedorComponent } from './layout/fornecedor/lista-fornecedor/lista-fornecedor.component';
import { CadastraFornecedorComponent } from './layout/fornecedor/cadastra-fornecedor/cadastra-fornecedor.component';
import { MatTableModule} from '@angular/material/table';
import { ListaProdutoComponent } from './layout/produto/lista-produto/lista-produto.component';
import { CadastraProdutoComponent } from './layout/produto/cadastra-produto/cadastra-produto.component';
import { ListaFarmaceuticoComponent } from './layout/farmaceutico/lista-farmaceutico/lista-farmaceutico.component';
import { CadastraFarmaceuticoComponent } from './layout/farmaceutico/cadastra-farmaceutico/cadastra-farmaceutico.component';
import { ListaClienteComponent } from './layout/cliente/lista-cliente/lista-cliente.component';
import { CadastraClienteComponent } from './layout/cliente/cadastra-cliente/cadastra-cliente.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TelaInicialComponent,
    FornecedorComponent,
    ClienteComponent,
    ProdutoComponent,
    FarmaceuticoComponent,
    ContainerComponent,
    ListaFornecedorComponent,
    CadastraFornecedorComponent,
    ListaProdutoComponent,
    CadastraProdutoComponent,
    ListaFarmaceuticoComponent,
    CadastraFarmaceuticoComponent,
    ListaClienteComponent,
    CadastraClienteComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
