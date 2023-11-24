import { Avaliacao } from './../../shared/model/Avaliacao';
import { AuthServiceService } from './../../shared/service/auth-service.service';
import { AvaliacaoServiceService } from './../../shared/service/avaliacao-service.service';
import { DadosCompartilhadosAvaliacaoService } from './../../shared/service/dados-compartilhados-avaliacao.service';
import { RestauranteService } from './../../shared/service/restaurante.service';
import { DadosCompartilhadosRestauranteService } from './../../shared/service/dados-compartilhados-restaurante.service';
import { Component, OnInit } from '@angular/core';
import { Restaurante } from 'src/app/shared/model/Restaurante';
import { Pessoa } from 'src/app/shared/model/Pessoa';
import { DadosCompartilhadosEditarRestauranteService } from 'src/app/shared/service/dados-compartilhados-editar-restaurante.service';

@Component({
  selector: 'app-restaurante-visualizar',
  templateUrl: './restaurante-visualizar.component.html',
  styleUrls: ['./restaurante-visualizar.component.scss']
})
export class RestauranteVisualizarComponent implements OnInit{

  constructor(private restauranteService : RestauranteService,
  private dadosCompartilhadosRestauranteService : DadosCompartilhadosRestauranteService,
  private dadosCompartilhadosAvaliacaoService : DadosCompartilhadosAvaliacaoService,
  private avaliacaoService : AvaliacaoServiceService,
  private authServiceService : AuthServiceService,
  private dadosCompartilhadosEditarRestauranteService : DadosCompartilhadosEditarRestauranteService

  ){}

  public avaliacoes: Array<Avaliacao> = new Array();

  restaurante: Restaurante;
  pessoa: Pessoa;
  comentario: String;
  nota!: number;

  private idUsuarioLogado = this.authServiceService.getUserId();

ngOnInit(): void {
  this.buscarAvaliacoesDoRestaurante();
  this.buscarRestaurantePeloId();
  console.log("Pessoa:", JSON.stringify(this.authServiceService.getPessoa()));

}

buscarAvaliacoesDoRestaurante(){

  const idDoRestaurante = this.dadosCompartilhadosEditarRestauranteService.getId();

  this.avaliacaoService.buscarAvaliacoesPorIdRestaurante(idDoRestaurante!).subscribe(
    resultado => {
      this.avaliacoes = resultado;
    },
    erro => {
      console.log('Erro ao buscar avaliacoes', erro);
    }
  );
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

  this.avaliacaoService.salvar(avaliacao).subscribe(
    (avaliacaoSalva) => {

      console.log('Avaliacao salva com sucesso: ', avaliacaoSalva);

    },
    (error) => {
      console.error('Erro salvar avaliacao:', error);
    }
  );
}

excluirAvaliacao(avaliacao: Avaliacao): void {
  const pessoaAutenticada = this.authServiceService.getPessoa();
  console.log("Pessoa:", JSON.stringify(pessoaAutenticada));

  console.log("Id da pessoa logada: " + pessoaAutenticada);

  this.avaliacaoService.excluir(avaliacao, pessoaAutenticada!).subscribe(
    () => {
      console.log('Avaliação excluída com sucesso.');
    },
    (error) => {
      console.error('Erro ao excluir avaliação:', error);
    }
  );
}
}
