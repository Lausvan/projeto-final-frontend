import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { take } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { produtoDTO } from '../Dto/produtoDTO';

@Injectable({
  providedIn: 'root'
})
export class ProdutoServiceService {

  url = 'http://localhost:8080/produto';

  constructor(private http: HttpClient) { }

    cadastrar(cliente: produtoDTO): Observable<any> {
      return this.http.post(`${this.url}/cadastrar`, cliente).pipe(take(1));
  }
  atualizar(cliente: produtoDTO): Observable<any> {
    return this.http.put(`${this.url}/${cliente.id}`, cliente).pipe(take(1));
  }

  buscarTodos(): Observable<Array<produtoDTO>> {
    return this.http.get<Array<produtoDTO>>(`${this.url}/mostrar-tudo`);
    }

  buscarPorId(id: number): Observable<produtoDTO> {
    if (id) {
        return this.http.get<produtoDTO>(`${this.url}/${id}`).pipe(take(1));
    }
    return of();

  }

  deletar(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`).pipe(take(1));
  }
}
