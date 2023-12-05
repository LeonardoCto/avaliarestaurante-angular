import { DadosCompartilhadosRestauranteService } from 'src/app/shared/service/dados-compartilhados-restaurante.service';
import { Component, OnInit } from '@angular/core';
import { Restaurante } from 'src/app/shared/model/Restaurante';
import { RestauranteService } from 'src/app/shared/service/restaurante.service';
import { DadosCompartilhadosEditarRestauranteService } from 'src/app/shared/service/dados-compartilhados-editar-restaurante.service';

@Component({
  selector: 'app-restaurante-relatorio',
  templateUrl: './restaurante-relatorio.component.html',
  styleUrls: ['./restaurante-relatorio.component.scss']
})
export class RestauranteRelatorioComponent implements OnInit{

  constructor(private dadosCompartilhadosEditarRestauranteService : DadosCompartilhadosEditarRestauranteService,
    private restauranteService : RestauranteService){}

  restauranteSelecionado: Restaurante | undefined;
  dadosRelatorio: any[] = [];

ngOnInit(): void {
  this.obterRestauranteSelecionado();
}

obterRestauranteSelecionado(): void {
  const idRestaurante = this.dadosCompartilhadosEditarRestauranteService.getId();

  if (idRestaurante) {
    this.restauranteService.buscarRestaurantePeloId(idRestaurante).subscribe((restaurante: Restaurante) => {
      this.restauranteSelecionado = restaurante;
      this.preencherTabela();
    });
  } else {
    console.error("ID do restaurante não encontrado");
  }
}


preencherTabela(): void {
  console.log("MEDIA:" + this.restauranteSelecionado?.avaliacao)
  if (this.restauranteSelecionado) {
    const dadosRelatorioItem = {
      id: this.restauranteSelecionado.id,
      nome: this.restauranteSelecionado.nome,
    };

    this.dadosRelatorio.push(dadosRelatorioItem);
  } else {
    console.error("Restaurante não encontrado");
  }
}
}
