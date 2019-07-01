import { ProdutoServiceService } from './../../../services/produto-service.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html',
  styleUrls: ['./lista-produto.component.scss']
})
export class ListaProdutoComponent implements OnInit {

  subs: Subscription;
  produtos: any;
  displayedColumns: string[] = ['id', 'nome', 'action', 'deletar'];

  constructor(private service: ProdutoServiceService) { }

  ngOnInit() {
    this.buscarProdutos();
  }

  applyFilter(filterValue: string) {
    this.produtos.filter = filterValue.trim().toLowerCase();
  }

  deletar(id: number) {
    this.service.deletar(id).subscribe(() => {
      console.log('removeu');
      this.buscarProdutos();
    });
  }

  private buscarProdutos() {
    this.subs = this.service.buscarTodos().subscribe(data => {
      console.log(data);
      this.produtos = new MatTableDataSource(data);
    });
  }

}
