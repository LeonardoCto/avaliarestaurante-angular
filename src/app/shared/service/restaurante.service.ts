import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Restaurante } from '../model/Restaurante';
import { SeletorRestaurante } from '../model/SeletorRestaurante';

@Injectable({
  providedIn: 'root'
})
export class RestauranteService {

  private nomeParaBuscarSubject: BehaviorSubject<string | undefined> = new BehaviorSubject<string | undefined>(undefined);

  private readonly API = "http://localhost:8080/api/restaurante";

  constructor(private httpClient: HttpClient) { }

  setNomeParaBuscar(nome: string): void {
    this.nomeParaBuscarSubject.next(nome);
  }

  getNomeParaBuscar(): Observable<string | undefined> {
    return this.nomeParaBuscarSubject.asObservable();
  }

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

   atualizar(restaurante: Restaurante): Observable<Restaurante> {
    return this.httpClient.put<Restaurante>(`${this.API}`, restaurante);
  }

  buscarComSeletor(seletor: SeletorRestaurante): Observable<Restaurante[]>{
    return this.httpClient.post<Array<Restaurante>>(`${this.API}/filtro`, seletor);
  }

  deletarRestaurante(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.API}/${id}`);
  }

  calcularMediaAvaliacoes(restauranteId: number): Observable<number> {
    return this.httpClient.get<number>(`${this.API}/${restauranteId}/media`);
  }

  ordenarRestauranteMaiorMedia(): Observable<Array<Restaurante>>{
    return this.httpClient.get<Array<Restaurante>>(`${this.API}/ordenar`)
  }

}
