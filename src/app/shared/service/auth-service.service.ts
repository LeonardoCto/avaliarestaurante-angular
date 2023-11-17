import { Injectable } from '@angular/core';
import { Pessoa } from '../model/Pessoa';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private userIdKey = 'userId';
  private pessoaKey = 'pessoa';

  private userId: number | null = null;
  private pessoa: Pessoa = new Pessoa();

  constructor() {
    this.userId = this.getUserIdFromStorage();
    this.pessoa = this.getPessoaFromStorage();
  }

  setPessoa(pessoa: Pessoa): void {
    this.pessoa = pessoa;
    sessionStorage.setItem(this.pessoaKey, JSON.stringify(pessoa));
  }

  getPessoa(): Pessoa {
    return this.pessoa;
  }

  setUserId(userId: number): void {
    this.userId = userId;
    sessionStorage.setItem(this.userIdKey, userId.toString());
  }

  getUserId(): number | null {
    return this.userId;
  }

  private getPessoaFromStorage(): Pessoa {
    const pessoaString = sessionStorage.getItem(this.pessoaKey);
    return pessoaString ? JSON.parse(pessoaString) : new Pessoa();
  }

  private getUserIdFromStorage(): number | null {
    const userIdString = sessionStorage.getItem(this.userIdKey);
    return userIdString ? parseInt(userIdString, 10) : null;
  }
}
