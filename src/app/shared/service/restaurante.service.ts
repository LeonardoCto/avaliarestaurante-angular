import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Restaurante } from '../model/Restaurante';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class RestauranteService {

  constructor(private httpClient : HttpClient) { }

  private readonly API = "http://localhost:8080/api/restaurante";

  listarTodos(): Observable<Array<Restaurante>> {
    return this.httpClient.get<Array<Restaurante>>(this.API);
  }
}
