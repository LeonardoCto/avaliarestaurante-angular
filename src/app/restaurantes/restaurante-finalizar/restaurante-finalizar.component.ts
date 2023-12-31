import { AuthServiceService } from 'src/app/shared/service/auth-service.service';
import { DadosCompartilhadosRestauranteService } from 'src/app/shared/service/dados-compartilhados-restaurante.service';
import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { RestauranteService } from 'src/app/shared/service/restaurante.service';
import { Restaurante } from 'src/app/shared/model/Restaurante';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-restaurante-finalizar',
  templateUrl: './restaurante-finalizar.component.html',
  styleUrls: ['./restaurante-finalizar.component.scss']
})
export class RestauranteFinalizarComponent {

  constructor(private router: Router, private restauranteService: RestauranteService,
    private dadosCompartilhadosRestauranteService: DadosCompartilhadosRestauranteService,
    private authServiceService: AuthServiceService) { }

  finalizarCadastro() {

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Restaurante cadastrado!",
      showConfirmButton: false,
      timer: 1800
    });

    const restauranteNome = this.dadosCompartilhadosRestauranteService.getNome();
    const restauranteCnpj = this.dadosCompartilhadosRestauranteService.getCnpj();
    const restauranteEndereco = this.dadosCompartilhadosRestauranteService.getEndereco();
    const restauranteImagem = this.dadosCompartilhadosRestauranteService.getImagem();
    const pessoa = this.authServiceService.getPessoa();

    const restaurante: Restaurante = new Restaurante();

    restaurante.nome = restauranteNome.nome;
    restaurante.cnpj = restauranteCnpj.cnpj;
    restaurante.endereco = restauranteEndereco;
    restaurante.pessoa = pessoa;
    restaurante.imagem = restauranteImagem;

    this.restauranteService.salvar(restaurante).subscribe(
      (restauranteSalvo) => {

        console.log('Restaurante salvo com sucesso: ', restauranteSalvo);

      },
      (error) => {
        console.error('Erro ao cadastrar o produto:', error);
        if (error.status === 400 && error.error === 'Restaurante já cadastrado com este CNPJ!') {
          Swal.fire({
            icon: 'error',
            title: 'Ops...',
            text: 'Restaurante já cadastrado com este CNPJ!',
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Ops...',
            text: 'Restaurante já cadastrado com este CNPJ!',
          });
        }
      }
    );
  }

}
