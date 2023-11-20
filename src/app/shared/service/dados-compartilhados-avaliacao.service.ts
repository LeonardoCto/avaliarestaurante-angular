import { Avaliacao } from '../model/Avaliacao';
import { Pessoa } from '../model/Pessoa';
import { Restaurante } from './../model/Restaurante';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DadosCompartilhadosAvaliacaoService {

  private avaliacao: Avaliacao = new Avaliacao();

  setPessoa(pessoa: Pessoa): void {
    this.avaliacao.pessoa = pessoa;
  }

  getPessoa(): Pessoa {
    return this.avaliacao.pessoa;
  }

  setRestaurante(restaurante: Restaurante): void {
    this.avaliacao.restaurante = restaurante;
  }

  getRestaurante(): Restaurante {
    return this.avaliacao.restaurante;
  }

  setNota(nota: number): void {
    this.avaliacao.nota = nota;
  }

  getNota(): number {
    return this.avaliacao.nota;
  }

  setDescricao(comentario: String): void {
    this.avaliacao.comentario = comentario;
  }

  getDescricao(): String {
    return this.avaliacao.comentario;
  }
}
