import { DadosCompartilhadosRestauranteService } from 'src/app/shared/service/dados-compartilhados-restaurante.service';
import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { RestauranteService } from 'src/app/shared/service/restaurante.service';
import { Restaurante } from 'src/app/shared/model/Restaurante';

@Component({
  selector: 'app-restaurante-finalizar',
  templateUrl: './restaurante-finalizar.component.html',
  styleUrls: ['./restaurante-finalizar.component.scss']
})
export class RestauranteFinalizarComponent {

  constructor(private router : Router, private restauranteService : RestauranteService,
    private dadosCompartilhadosRestauranteService : DadosCompartilhadosRestauranteService) { }

  finalizarCadastro(){

    const restauranteNome = this.dadosCompartilhadosRestauranteService.getNome();
    const restauranteCnpj = this.dadosCompartilhadosRestauranteService.getCnpj();
    const restauranteEndereco = this.dadosCompartilhadosRestauranteService.getEndereco();
    const restauranteImagem = this.dadosCompartilhadosRestauranteService.getImagem();

    const restaurante: Restaurante = new Restaurante();

    restaurante.nome = restauranteNome.nome;
    restaurante.cnpj = restauranteCnpj.cnpj;


    restaurante.endereco = restauranteEndereco;

    this.restauranteService.salvar(restaurante).subscribe(
      (restauranteSalvo) => {

        console.log('Restaurante salvo com sucesso: ', restauranteSalvo);

      },
      (error) => {
        console.error('Erro ao cadastrar o produto:', error);
      }
    );
  }

}
