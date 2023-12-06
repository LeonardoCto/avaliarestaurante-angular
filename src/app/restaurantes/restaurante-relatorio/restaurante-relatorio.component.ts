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

  restaurantes: Restaurante[] = [];
  dadosRelatorio: any[] = [];

ngOnInit(): void {
  this.obterRestaurantesOrdenadosPorMaiorMedia();
}

obterRestaurantesOrdenadosPorMaiorMedia(): void {
  this.restauranteService.ordenarRestauranteMaiorMedia().subscribe(
    (restaurantes: Restaurante[]) => {
      console.log('Restaurantes recebidos:', restaurantes);
      this.restaurantes = restaurantes;
      this.preencherTabela();
    },
    (error) => {
      console.error('Erro ao obter restaurantes ordenados por maior média:', error);
    }
  );
}


preencherTabela(): void {
  this.restaurantes.forEach(restaurante => {
    
    const dadosRelatorioItem = {
      media: restaurante.media || 0,
      nome: restaurante.nome,
    };

    this.dadosRelatorio.push(dadosRelatorioItem);
  });
}
}
