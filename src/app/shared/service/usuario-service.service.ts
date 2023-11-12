import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pessoa } from '../model/Pessoa';
import { Observable } from 'rxjs';
import { PessoaDTO } from '../model/PessoaDTO';

@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {

  constructor(private httpClient : HttpClient) { }

  private readonly API = "http://localhost:8080/api/pessoa";


  login(pessoaDTO: PessoaDTO): Observable<any> {
    return this.httpClient.post<any>(`${this.API}/login`, pessoaDTO);
  }

}
