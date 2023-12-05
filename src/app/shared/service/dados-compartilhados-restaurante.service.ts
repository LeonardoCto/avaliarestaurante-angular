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
  private cnpjRestaurante: Restaurante = new Restaurante();
  private imagemRestaurante: Restaurante = new Restaurante();

  private idRestauranteDetalhe : Restaurante = new Restaurante();
  private readonly ID_RESTAURANTE_DETALHE_KEY = 'idRestauranteDetalhe';

  setIdRestauranteDetalhe(id: number): void {
    this.idRestauranteDetalhe.id = id;
    sessionStorage.setItem(this.ID_RESTAURANTE_DETALHE_KEY, id.toString());
  }

  getIdRestauranteDetalhe(): number {
    const storedId = sessionStorage.getItem(this.ID_RESTAURANTE_DETALHE_KEY);
    return storedId ? +storedId : 0;
  }


  setImagem(imagem: String): void {
    this.imagemRestaurante.imagem = imagem;
  }

  getImagem(): String {
    return this.imagemRestaurante.imagem;
  }

  setNome(nome: String){
    this.restaurante.nome = nome;
  }
  getNome(): {nome: String}{
    return {nome: this.restaurante.nome}
  }
  setCnpj(cnpj: String){
    this.cnpjRestaurante.cnpj = cnpj;
  }
  getCnpj(): {cnpj: String}{
    return {cnpj: this.cnpjRestaurante.cnpj}
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

  getMedia(){
    return this.restaurante.mediaAvaliacoes;
  }
  setMedia(mediaAvaliacoes: number){
    this.restaurante.mediaAvaliacoes = mediaAvaliacoes;
  }
}
