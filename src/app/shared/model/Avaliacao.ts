import { Restaurante } from './Restaurante';
import { Pessoa } from './Pessoa';

export class Avaliacao {
  id: number;
  nota: number;
  comentario: String;
  pessoa: Pessoa;
  restaurante: Restaurante;
}
