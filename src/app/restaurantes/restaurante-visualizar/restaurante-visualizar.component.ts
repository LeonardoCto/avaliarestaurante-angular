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
import Swal from 'sweetalert2';

@Component({
  selector: 'app-restaurante-visualizar',
  templateUrl: './restaurante-visualizar.component.html',
  styleUrls: ['./restaurante-visualizar.component.scss'],
})
export class RestauranteVisualizarComponent implements OnInit {

  constructor(private restauranteService: RestauranteService,
    private dadosCompartilhadosRestauranteService: DadosCompartilhadosRestauranteService,
    private dadosCompartilhadosAvaliacaoService: DadosCompartilhadosAvaliacaoService,
    private avaliacaoService: AvaliacaoServiceService,
    private authServiceService: AuthServiceService,
    private dadosCompartilhadosEditarRestauranteService: DadosCompartilhadosEditarRestauranteService

  ) { }

  public avaliacoes: Array<Avaliacao> = new Array();

  restaurante: Restaurante;
  pessoa: Pessoa;
  comentario: String;
  nota!: number;
  notaDoUsuario!: number;
  mediaAvaliacoes: number;

  private idUsuarioLogado = this.authServiceService.getUserId();

  ngOnInit(): void {
    this.buscarAvaliacoesDoRestaurante();
    this.buscarRestaurantePeloId();
    this.calcularMediaAvaliacoes();
    console.log("Pessoa:", JSON.stringify(this.authServiceService.getPessoa()));
  }

  onRatingChange(event: any, index: number) {
    this.avaliacoes[index].nota = event.value;
  }

  atualizarListaAvaliacoes(avaliacao: Avaliacao) {
    this.avaliacoes.push(avaliacao);
  }
  atualizarRemoverAvaliacaoDaLista(avaliacao: Avaliacao) {
    const index = this.avaliacoes.indexOf(avaliacao);
    if (index !== -1) {
      this.avaliacoes.splice(index, 1);
    }
  }
  atualizarMediaAvaliacoesNaTela(media: number) {
    this.mediaAvaliacoes = media;
  }

  buscarAvaliacoesDoRestaurante() {
    const idDoRestaurante = this.dadosCompartilhadosEditarRestauranteService.getId();
    this.avaliacaoService.buscarAvaliacoesPorIdRestaurante(idDoRestaurante!).subscribe(
      resultado => {
        this.avaliacoes = resultado;
        for (const avaliacao of this.avaliacoes) {
          this.notaDoUsuario = avaliacao.nota;
        }
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

  async salvarAvaliacao() {
    const idDoRestaurante = this.dadosCompartilhadosEditarRestauranteService.getId();

    if (idDoRestaurante != null && this.idUsuarioLogado != null) {
      try {
        const usuarioJaAvaliou = await this.avaliacaoService.usuarioAvaliouRestaurante(idDoRestaurante, this.idUsuarioLogado).toPromise();

        if (usuarioJaAvaliou) {
          Swal.fire("Você já avaliou este restaurante.", "", "error");
          return;
        }
      } catch (error) {
        console.error('Erro ao verificar se o usuário avaliou o restaurante:', error);
        return;
      }
    } else if (this.idUsuarioLogado == null) {
      Swal.fire("Realize login para poder avaliar um restaurante!", "", "error");
      return;
    }

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

    Swal.fire({
      title: "Salvar esta avaliação?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Salvar",
      denyButtonText: `Não salvar`
    }).then((result) => {
      if (result.isConfirmed) {
        this.avaliacaoService.salvar(avaliacao).subscribe(
          (avaliacaoSalva) => {
            this.atualizarListaAvaliacoes(avaliacaoSalva);
            this.calcularMediaAvaliacoes();
          },
          (error) => {
            console.error('Erro salvar avaliacao:', error);
          }
        );
        Swal.fire("Avaliação salva!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  }

  excluirAvaliacao(avaliacao: Avaliacao): void {
    const pessoaAutenticada = this.authServiceService.getPessoa();
    console.log("Pessoa:", JSON.stringify(pessoaAutenticada));

    console.log("Id da pessoa logada: " + pessoaAutenticada);

    Swal.fire({
      title: "Tem certeza disso?",
      text: "Você não poderá desfazer essa ação!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sim, deletar!",
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        this.avaliacaoService.excluir(avaliacao, pessoaAutenticada!).subscribe(
          () => {
            this.atualizarRemoverAvaliacaoDaLista(avaliacao);
            this.calcularMediaAvaliacoes();
          },
          (error) => {
            console.error('Erro ao excluir avaliação:', error);
          }
        );
        Swal.fire({
          title: "Restaurante deletado!",
          icon: "success"
        });
      }
    });
  }

  calcularMediaAvaliacoes() {
    const idDoRestaurante = this.dadosCompartilhadosEditarRestauranteService.getId();
    if (idDoRestaurante != null) {
      this.restauranteService.calcularMediaAvaliacoes(idDoRestaurante).subscribe(
        media => {
          this.atualizarMediaAvaliacoesNaTela(parseFloat(media.toFixed(2)));
        },
        erro => {
          console.error('Erro ao buscar média de avaliações', erro);
        }
      );
    }
  }

}
