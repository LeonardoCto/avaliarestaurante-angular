import { PessoaService } from 'src/app/shared/service/PessoaService';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Endereco } from '../model/Endereco';
import { Pessoa } from '../model/Pessoa';

@Injectable({
  providedIn: 'root'
})
export class DadosCompartilhadosCadastroService {

  constructor(){}

  private endereco: Endereco = new Endereco();
  private pessoa : Pessoa = new Pessoa();

  setDados(nome: String, email: String, cpf: String, senha: String){
    this.pessoa.nome = nome;
    this.pessoa.email = email;
    this.pessoa.cpf = cpf;
    this.pessoa.senha = senha;
  }

  getDados(): Pessoa {
    return this.pessoa;
  }

  setEndereco(cidade: String, estado: String, cep: String, numero: number, bairro: String, rua: String) {
    this.endereco.cidade = cidade;
    this.endereco.estado = estado;
    this.endereco.cep = cep;
    this.endereco.numero = numero;
    this.endereco.bairro = bairro;
    this.endereco.rua = rua;
  }
  getEndereco(): Endereco {
    return this.endereco;
  }
}
