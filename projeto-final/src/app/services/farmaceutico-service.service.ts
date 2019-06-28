import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { farmaceuticoDTO } from 'src/app/Dto/farmaceuticoDTO';
import { Observable, of } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FarmaceuticoServiceService {

  url = 'http://localhost:8080/farmaceutico';

  constructor(private http: HttpClient) { }

  cadastrar(cliente: farmaceuticoDTO): Observable<any> {
    return this.http.post(`${this.url}/cadastrar`, cliente).pipe(take(1));
}
atualizar(cliente: farmaceuticoDTO): Observable<any> {
  return this.http.put(`${this.url}/${cliente.id}`, cliente).pipe(take(1));
}

buscarTodos(): Observable<Array<farmaceuticoDTO>> {
  return this.http.get<Array<farmaceuticoDTO>>(`${this.url}/mostrar-tudo`);
  }

buscarPorId(id: number): Observable<farmaceuticoDTO> {
  if (id) {
    return this.http.get<farmaceuticoDTO>(`${this.url}/${id}`).pipe(take(1));
}
  return of();
}

deletar(id: number): Observable<any> {
  return this.http.delete(`${this.url}/${id}`).pipe(take(1));
}


}
