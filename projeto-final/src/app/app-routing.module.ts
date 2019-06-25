import { TelaInicialComponent } from './layout/tela-inicial/tela-inicial.component';
import { FarmaceuticoComponent } from './layout/farmaceutico/farmaceutico.component';
import { ProdutoComponent } from './layout/produto/produto.component';
import { FornecedorComponent } from './layout/fornecedor/fornecedor.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteComponent } from './layout/cliente/cliente.component';


const routes: Routes = [
  {path: 'cadastro-fornecedor', component: FornecedorComponent},
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
