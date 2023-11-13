import { Injectable } from '@angular/core';
import { Pessoa } from '../model/Pessoa';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }

  private userId: number | null = null;

  private pessoa: Pessoa = new Pessoa();

  setPessoa(pessoa: Pessoa): void {
    this.pessoa = pessoa;
  }

  getPessoa(): Pessoa {
    return this.pessoa;
  }

  setUserId(userId: number): void {
    this.userId = userId;
  }

  getUserId(): number | null {
    return this.userId;
  }
}
