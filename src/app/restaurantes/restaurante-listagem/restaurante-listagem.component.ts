import { Restaurante } from 'src/app/shared/model/Restaurante';
import { RestauranteService } from './../../shared/service/restaurante.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurante-listagem',
  templateUrl: './restaurante-listagem.component.html',
  styleUrls: ['./restaurante-listagem.component.scss']
})
export class RestauranteListagemComponent implements OnInit{

  constructor(private restauranteService : RestauranteService) { }

  public restaurantes: Array<Restaurante> = new Array();

  ngOnInit(): void {
    this.buscarRestaurantes();
}

buscarRestaurantes(){
  this.restauranteService.listarTodos().subscribe(
    resultado => {
      this.restaurantes = resultado;
    },
    erro => {
      console.log('Erro ao buscar restaurantes', erro);
    }
  );
}
}
