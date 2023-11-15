import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Restaurante } from '../model/Restaurante';
import { Observable } from 'rxjs';

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

}


