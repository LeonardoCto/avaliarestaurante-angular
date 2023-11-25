import { DadosCompartilhadosEditarRestauranteService } from './../../shared/service/dados-compartilhados-editar-restaurante.service';
import { DadosCompartilhadosRestauranteService } from 'src/app/shared/service/dados-compartilhados-restaurante.service';
import { Restaurante } from 'src/app/shared/model/Restaurante';
import { RestauranteService } from './../../shared/service/restaurante.service';
import { Component, OnInit } from '@angular/core';
import { SeletorRestaurante } from 'src/app/shared/model/SeletorRestaurante';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-restaurante-listagem',
  templateUrl: './restaurante-listagem.component.html',
  styleUrls: ['./restaurante-listagem.component.scss']
})
export class RestauranteListagemComponent implements OnInit{
  seletor: SeletorRestaurante = new SeletorRestaurante();

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

buscarComSeletor() {
  this.restauranteService.buscarComSeletor(this.seletor).subscribe(
    (resultado) => {
      this.restaurantes = resultado;
      console.log('Restaurantes com filtro:', resultado);
    },
    (erro) => {
      console.error('Erro ao buscar restaurantes com filtro', erro);
    }
  );
}


}
