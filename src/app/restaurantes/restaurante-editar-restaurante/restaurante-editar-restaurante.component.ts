import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RestauranteService } from 'src/app/shared/service/restaurante.service';
import { DadosCompartilhadosEditarRestauranteService } from 'src/app/shared/service/dados-compartilhados-editar-restaurante.service';
import { Restaurante } from 'src/app/shared/model/Restaurante';

@Component({
  selector: 'app-restaurante-editar-restaurante',
  templateUrl: './restaurante-editar-restaurante.component.html',
  styleUrls: ['./restaurante-editar-restaurante.component.scss']
})
export class RestauranteEditarRestauranteComponent implements OnInit, OnDestroy {

  nome: String;
  cnpj: String;
  cidade: String;
  estado: String;
  cep: String;
  rua: String;
  bairro: String;
  numero: number;

  restaurante: Restaurante = new Restaurante();

  private subscription: Subscription;

  constructor(
    private router: Router,
    private dadosCompartilhadosEditarRestauranteService: DadosCompartilhadosEditarRestauranteService,
    private restauranteService: RestauranteService
  ) {}

  ngOnInit(): void {
    this.preencherCampos();
  }

  preencherCampos() {
    const idRestaurante = this.dadosCompartilhadosEditarRestauranteService.getId();

    if (idRestaurante) {
      console.log("Id do restaurante para editar clicado: " + idRestaurante);

      this.subscription = this.restauranteService.buscarRestaurantePeloId(idRestaurante)
        .subscribe((restaurante: Restaurante) => {

          this.nome = restaurante.nome;
          this.cnpj = restaurante.cnpj;
          this.cidade = restaurante.endereco.cidade;
          this.estado = restaurante.endereco.estado;
          this.cep = restaurante.endereco.cep;
          this.rua = restaurante.endereco.rua;
          this.bairro = restaurante.endereco.bairro;
          this.numero = restaurante.endereco.numero;
        });
    }
  }


  atualizarRestaurante(): void {
    const idRestaurante = this.dadosCompartilhadosEditarRestauranteService.getId();

      this.restaurante.cnpj = this.cnpj;
      this.restaurante.nome = this.nome;


      this.restauranteService.atualizar(this.restaurante, idRestaurante!)
        .subscribe(
          restauranteAtualizado => {
            console.log('Restaurante atualizado:', restauranteAtualizado);
          },
          error => {
            console.error('Erro ao atualizar restaurante:', error);
          }
        );

  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
