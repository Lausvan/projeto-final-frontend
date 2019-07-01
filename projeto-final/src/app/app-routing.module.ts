import { CadastraClienteComponent } from './layout/cliente/cadastra-cliente/cadastra-cliente.component';
import { ListaClienteComponent } from './layout/cliente/lista-cliente/lista-cliente.component';
import { CadastraFarmaceuticoComponent } from './layout/farmaceutico/cadastra-farmaceutico/cadastra-farmaceutico.component';
import { ListaFarmaceuticoComponent } from './layout/farmaceutico/lista-farmaceutico/lista-farmaceutico.component';
import { CadastraProdutoComponent } from './layout/produto/cadastra-produto/cadastra-produto.component';
import { ListaProdutoComponent } from './layout/produto/lista-produto/lista-produto.component';
import { FornecedorComponent } from './layout/fornecedor/fornecedor.component';
import { ListaFornecedorComponent } from './layout/fornecedor/lista-fornecedor/lista-fornecedor.component';
import { TelaInicialComponent } from './layout/tela-inicial/tela-inicial.component';
import { FarmaceuticoComponent } from './layout/farmaceutico/farmaceutico.component';
import { ProdutoComponent } from './layout/produto/produto.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteComponent } from './layout/cliente/cliente.component';
import { CadastraFornecedorComponent } from './layout/fornecedor/cadastra-fornecedor/cadastra-fornecedor.component';


const routes: Routes = [
  {path: 'fornecedor', component: FornecedorComponent, children: [
    {path: 'lista', component: ListaFornecedorComponent},
    {path: 'cadastro', component: CadastraFornecedorComponent},
    {path: 'cadastro/:id', component: CadastraFornecedorComponent},
    {path: '', redirectTo: 'lista', pathMatch: 'full'}
  ]},
  {path: 'cadastro-produto', component: ProdutoComponent, children: [
    {path: 'lista', component: ListaProdutoComponent},
    {path: 'cadastro', component: CadastraProdutoComponent},
    {path: 'cadastro/:id', component: CadastraProdutoComponent},
    {path: '', redirectTo: 'lista', pathMatch: 'full'}
  ]},
  {path: 'farmaceutico', component: FarmaceuticoComponent, children: [
    {path: 'lista', component: ListaFarmaceuticoComponent},
    {path: 'cadastro', component: CadastraFarmaceuticoComponent},
    {path: 'cadastro/:id', component: CadastraFarmaceuticoComponent},
    {path: '', redirectTo: 'lista', pathMatch: 'full'}
  ]},
  {path: 'tela-inicial', component: TelaInicialComponent},
  {path: 'cliente', component: ClienteComponent, children: [
  {path: 'lista', component: ListaClienteComponent},
  {path: 'cadastro', component: CadastraClienteComponent},
  {path: 'cadastro/:id', component: CadastraClienteComponent},
  {path: '', redirectTo: 'lista', pathMatch: 'full'}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
