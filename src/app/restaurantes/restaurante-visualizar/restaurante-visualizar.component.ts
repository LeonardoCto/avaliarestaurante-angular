import { Avaliacao } from './../../shared/model/Avaliacao';
import { AuthServiceService } from './../../shared/service/auth-service.service';
import { AvaliacaoServiceService } from './../../shared/service/avaliacao-service.service';
import { DadosCompartilhadosAvaliacaoService } from './../../shared/service/dados-compartilhados-avaliacao.service';
import { RestauranteService } from './../../shared/service/restaurante.service';
import { DadosCompartilhadosRestauranteService } from './../../shared/service/dados-compartilhados-restaurante.service';
import { Component, OnInit } from '@angular/core';
import { Restaurante } from 'src/app/shared/model/Restaurante';
import { Pessoa } from 'src/app/shared/model/Pessoa';

@Component({
  selector: 'app-restaurante-visualizar',
  templateUrl: './restaurante-visualizar.component.html',
  styleUrls: ['./restaurante-visualizar.component.scss']
})
export class RestauranteVisualizarComponent implements OnInit{

  constructor(private restauranteService : RestauranteService,
  private dadosCompartilhadosRestauranteService : DadosCompartilhadosRestauranteService,
  private dadosCompartilhadosAvaliacaoService : DadosCompartilhadosAvaliacaoService,
  private avaliacaoServiceService : AvaliacaoServiceService,
  private authServiceService : AuthServiceService

  ){}

  restaurante: Restaurante;
  pessoa: Pessoa;
  comentario: String;
  nota: number;

ngOnInit(): void {
  this.buscarRestaurantePeloId();
  console.log("Pessoa:", JSON.stringify(this.authServiceService.getPessoa()));

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

salvarAvaliacao(){

   const avaliacao: Avaliacao = new Avaliacao();

  this.dadosCompartilhadosAvaliacaoService.setDescricao(this.comentario);
  this.dadosCompartilhadosAvaliacaoService.setNota(this.nota);
  this.dadosCompartilhadosAvaliacaoService.setPessoa(this.authServiceService.getPessoa());
  this.dadosCompartilhadosAvaliacaoService.setRestaurante(this.restaurante);

  const comentario = this.dadosCompartilhadosAvaliacaoService.getDescricao();
  const nota = this.dadosCompartilhadosAvaliacaoService.getNota();
  const pessoa = this.dadosCompartilhadosAvaliacaoService.getPessoa();
  const restaurante = this.dadosCompartilhadosAvaliacaoService.getRestaurante();

  avaliacao.comentario = comentario;
  avaliacao.nota = nota;
  avaliacao.pessoa = pessoa;
  avaliacao.restaurante = restaurante;

  this.avaliacaoServiceService.salvar(avaliacao).subscribe(
    (avaliacaoSalva) => {

      console.log('Avaliacao salva com sucesso: ', avaliacaoSalva);

    },
    (error) => {
      console.error('Erro salvar avaliacao:', error);
    }
  );
}

}
