import { Pessoa } from "./Pessoa";
import { Endereco } from "./Endereco";

export class Restaurante {
  id: number;
  nome: string;
  pessoa: Pessoa;
  endereco: Endereco;
  avaliacao: number;
  imagem: Blob;
  cnpj: string;
}
