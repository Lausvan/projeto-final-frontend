import { FornecedorServiceService } from './../../../services/fornecedor-service.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-lista-fornecedor',
  templateUrl: './lista-fornecedor.component.html',
  styleUrls: ['./lista-fornecedor.component.scss']
})
export class ListaFornecedorComponent implements OnInit {

  subs: Subscription;
  fornecedores: any;
  displayedColumns: string[] = ['id', 'nome', 'action', 'deletar'];

  constructor(private service: FornecedorServiceService) { }

  ngOnInit() {
    this.buscarClientes();
  }

  applyFilter(filterValue: string) {
    this.fornecedores.filter = filterValue.trim().toLowerCase();
  }

  deletar(id: number) {
    this.service.deletar(id).subscribe(() => {
      console.log('removeu');
      this.buscarClientes();
    });
  }

  private buscarClientes() {
    this.subs = this.service.buscarTodos().subscribe(data => {
      console.log(data);
      this.fornecedores = new MatTableDataSource(data);
    });
  }


}

