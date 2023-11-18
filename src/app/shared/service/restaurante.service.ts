import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Restaurante } from '../model/Restaurante';

@Injectable({
  providedIn: 'root'
})
export class RestauranteService {

  private readonly API = "http://localhost:8080/api/restaurante";

  constructor(private httpClient: HttpClient) { }

  salvar(restaurante: Restaurante): Observable<Restaurante> {
    console.log('JSON enviado: ', JSON.stringify(restaurante));
    return this.httpClient.post<Restaurante>(this.API, restaurante);
  }

  listarTodos(): Observable<Array<Restaurante>> {
    return this.httpClient.get<Array<Restaurante>>(this.API);
  }

  listarPorIdUsuario(id: number): Observable<Array<Restaurante>> {
    return this.httpClient.get<Array<Restaurante>>(`${this.API}/${id}`);
  }

  buscarRestaurantePeloId(id: number): Observable<Restaurante> {
    return this.httpClient.get<Restaurante>(`${this.API}/buscar/${id}`);
  }

  atualizar(restaurante: Restaurante, id: number): Observable<Restaurante> {
    return this.httpClient.put<Restaurante>(`${this.API}/${id}`, restaurante);
  }
}
