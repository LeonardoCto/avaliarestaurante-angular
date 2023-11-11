import { Restaurante } from 'src/app/shared/model/Restaurante';
import { Injectable } from '@angular/core';
import { Endereco } from '../model/Endereco';

@Injectable({
  providedIn: 'root'
})
export class DadosCompartilhadosRestauranteService {

  constructor() { }

  private restaurante: Restaurante = new Restaurante();
  private endereco: Endereco = new Endereco();
  private cnpj: Restaurante = new Restaurante();
  private imagem: Restaurante = new Restaurante();

  setImagem(imagem: Blob){
    this.restaurante.imagem = imagem;
  }
  getImagem(): {imagem: Blob}{
    return {imagem: this.restaurante.imagem}
  }

  setNome(nome: String){
    this.restaurante.nome = nome;
  }
  getNome(): {nome: String}{
    return {nome: this.restaurante.nome}
  }
  setCnpj(cnpj: String){
    this.restaurante.cnpj = cnpj;
  }
  getCnpj(): {cnpj: String}{
    return {cnpj: this.restaurante.cnpj}
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
