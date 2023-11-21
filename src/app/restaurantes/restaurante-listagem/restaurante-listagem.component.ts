import { DadosCompartilhadosEditarRestauranteService } from './../../shared/service/dados-compartilhados-editar-restaurante.service';
import { DadosCompartilhadosRestauranteService } from 'src/app/shared/service/dados-compartilhados-restaurante.service';
import { Restaurante } from 'src/app/shared/model/Restaurante';
import { RestauranteService } from './../../shared/service/restaurante.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurante-listagem',
  templateUrl: './restaurante-listagem.component.html',
  styleUrls: ['./restaurante-listagem.component.scss']
})
export class RestauranteListagemComponent implements OnInit{

  constructor(private restauranteService : RestauranteService,
  private dadosCompartilhadosRestauranteService : DadosCompartilhadosRestauranteService,
  private dadosCompartilhadosEditarRestauranteService : DadosCompartilhadosEditarRestauranteService

  ) { }

  public restaurantes: Array<Restaurante> = new Array();

  hoveredIndex: number | null = null;

  idRestauranteSelecionado: number | null = null;

  onMouseEnter(index: number) {
    this.hoveredIndex = index;
  }

  onMouseLeave() {
    this.hoveredIndex = null;
  }

  ngOnInit(): void {
    this.buscarRestaurantes();

}

selecionarRestaurante(id: number): void {

  this.dadosCompartilhadosEditarRestauranteService.setId(id);

  this.idRestauranteSelecionado = id;

  this.dadosCompartilhadosRestauranteService.setIdRestauranteDetalhe(this.idRestauranteSelecionado);

  console.log("id setado: " + this.idRestauranteSelecionado)
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
