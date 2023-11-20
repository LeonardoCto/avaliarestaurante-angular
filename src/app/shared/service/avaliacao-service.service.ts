import { Avaliacao } from './../model/Avaliacao';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Restaurante } from '../model/Restaurante';

@Injectable({
  providedIn: 'root'
})
export class AvaliacaoServiceService {

  private readonly API = "http://localhost:8080/api/avaliacao";

  constructor(private httpClient: HttpClient) { }

  salvar(avaliacao: Avaliacao): Observable<Avaliacao> {
    return this.httpClient.post<Avaliacao>(this.API, avaliacao);
  }
}
