import { Injectable } from '@angular/core';
import { fornecedorDTO } from '../Dto/fornecedorDTO';
import { Observable, of } from 'rxjs';
import { take } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FornecedorServiceService {

  url = 'http://localhost:8080/fornecedor';

  constructor(private http: HttpClient) { }

    cadastrar(cliente: fornecedorDTO): Observable<any> {
      return this.http.post(`${this.url}/cadastrar`, cliente).pipe(take(1));
  }
  atualizar(cliente: fornecedorDTO): Observable<any> {
    return this.http.put(`${this.url}/${cliente.id}`, cliente).pipe(take(1));
  }

  buscarTodos(): Observable<Array<fornecedorDTO>> {
    return this.http.get<Array<fornecedorDTO>>(`${this.url}/mostrar-tudo`);
    }

  buscarPorId(id: number): Observable<fornecedorDTO> {
    if (id) {
        return this.http.get<fornecedorDTO>(`${this.url}/${id}`).pipe(take(1));
    }
    return of();

  }

  buscarPorNome(value: string): Observable<fornecedorDTO[]> {
    if (value) {
      return this.http.get<fornecedorDTO[]>(`${this.url}/busca-por-nome/${value}`).pipe(take(1));
    }
    return of([]);
  }

  deletar(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`).pipe(take(1));
  }
}
