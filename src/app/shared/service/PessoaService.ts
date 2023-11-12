import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pessoa } from '../model/Pessoa';
import { Observable } from 'rxjs';
import { PessoaDTO } from '../model/PessoaDTO';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor(private httpClient : HttpClient) { }

  private readonly API = "http://localhost:8080/api/pessoa";

  salvar(pessoa: Pessoa): Observable<Pessoa> {
    return this.httpClient.post<Pessoa>(this.API, pessoa);
  }

  login(pessoaDTO: PessoaDTO): Observable<number> {
    return this.httpClient.post<number>(`${this.API}/login`, pessoaDTO);
  }

}
