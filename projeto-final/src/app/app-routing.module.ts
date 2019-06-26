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
    {path: '', redirectTo: 'lista', pathMatch: 'full'}
  ]},
  {path: 'cadastro-produto', component: ProdutoComponent},
  {path: 'cadastro-farmaceutico', component: FarmaceuticoComponent},
  {path: 'tela-inicial', component: TelaInicialComponent},
  {path: 'cadastro-cliente', component: ClienteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
