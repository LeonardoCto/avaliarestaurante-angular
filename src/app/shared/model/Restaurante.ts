import { Pessoa } from "./Pessoa";
import { Endereco } from "./Endereco";

export class Restaurante {
  id: number;
  nome: String;
  pessoa: Pessoa;
  endereco: Endereco;
  avaliacao: number;
  imagem: String;
  cnpj: String;
  mediaAvaliacoes: number | null | undefined;
}
