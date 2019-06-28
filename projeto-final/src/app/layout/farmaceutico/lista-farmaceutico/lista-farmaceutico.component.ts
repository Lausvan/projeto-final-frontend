import { FarmaceuticoServiceService } from './../../../services/farmaceutico-service.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-lista-farmaceutico',
  templateUrl: './lista-farmaceutico.component.html',
  styleUrls: ['./lista-farmaceutico.component.scss']
})
export class ListaFarmaceuticoComponent implements OnInit {

  subs: Subscription;
  farmaceuticos: any;
  displayedColumns: string[] = ['id', 'nome', 'action', 'deletar'];

  constructor(private service: FarmaceuticoServiceService) { }

  ngOnInit() {
    this.buscarClientes();
  }

  applyFilter(filterValue: string) {
    this.farmaceuticos.filter = filterValue.trim().toLowerCase();
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
      this.farmaceuticos = new MatTableDataSource(data);
    });
  }
}
