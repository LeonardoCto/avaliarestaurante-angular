import { Avaliacao } from './../model/Avaliacao';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Restaurante } from '../model/Restaurante';
import { Pessoa } from '../model/Pessoa';

@Injectable({
  providedIn: 'root'
})
export class AvaliacaoServiceService {

  private readonly API = "http://localhost:8080/api/avaliacao";

  constructor(private httpClient: HttpClient) { }

  salvar(avaliacao: Avaliacao): Observable<Avaliacao> {
    return this.httpClient.post<Avaliacao>(this.API, avaliacao);
  }

  excluir(avaliacao: Avaliacao, pessoaAutenticada: Pessoa): Observable<Avaliacao> {
    avaliacao.pessoa = pessoaAutenticada;
    return this.httpClient.post<Avaliacao>(`${this.API}/excluir`, avaliacao);
  }

  buscarAvaliacoesPorIdRestaurante(idRestaurante: number): Observable<Avaliacao[]> {
    return this.httpClient.get<Avaliacao[]>(`${this.API}/${idRestaurante}`);
  }

  buscarTodasNotas(idRestaurante: number): Observable<number[]> {
    return this.httpClient.get<number[]>(`${this.API}/restaurante/${idRestaurante}`);
  }

  usuarioAvaliouRestaurante(idRestaurante: number, idUsuario: number): Observable<boolean> {
    return this.httpClient.get<boolean>(`${this.API}/verificar-avaliacao/${idRestaurante}/${idUsuario}`);
  }
}
