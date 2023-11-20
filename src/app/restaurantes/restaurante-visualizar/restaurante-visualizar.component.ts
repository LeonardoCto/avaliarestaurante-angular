import { RestauranteService } from './../../shared/service/restaurante.service';
import { DadosCompartilhadosRestauranteService } from './../../shared/service/dados-compartilhados-restaurante.service';
import { Component, OnInit } from '@angular/core';
import { Restaurante } from 'src/app/shared/model/Restaurante';

@Component({
  selector: 'app-restaurante-visualizar',
  templateUrl: './restaurante-visualizar.component.html',
  styleUrls: ['./restaurante-visualizar.component.scss']
})
export class RestauranteVisualizarComponent implements OnInit{

  constructor(private restauranteService : RestauranteService,
  private dadosCompartilhadosRestauranteService : DadosCompartilhadosRestauranteService){}

  restaurante: Restaurante;

ngOnInit(): void {
  this.buscarRestaurantePeloId();
}

buscarRestaurantePeloId() {
  this.restauranteService
    .buscarRestaurantePeloId(
      this.dadosCompartilhadosRestauranteService.getIdRestauranteDetalhe()
    )
    .subscribe((restaurante: Restaurante) => {
      this.restaurante = restaurante;
    });
}

}
