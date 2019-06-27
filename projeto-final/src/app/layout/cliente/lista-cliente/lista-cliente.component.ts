import { ClienteServiceService } from 'src/app/services/cliente-service.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-lista-cliente',
  templateUrl: './lista-cliente.component.html',
  styleUrls: ['./lista-cliente.component.scss']
})
export class ListaClienteComponent implements OnInit {


  subs: Subscription;
  clientes: any;
  displayedColumns: string[] = ['id', 'nome', 'action', 'deletar'];

  constructor(private service: ClienteServiceService) { }

  ngOnInit() {
    this.buscarClientes();
  }

  applyFilter(filterValue: string) {
    this.clientes.filter = filterValue.trim().toLowerCase();
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
      this.clientes = new MatTableDataSource(data);
    });
  }


}
