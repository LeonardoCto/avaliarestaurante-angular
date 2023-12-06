import { DadosCompartilhadosRestauranteService } from './../../shared/service/dados-compartilhados-restaurante.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RestauranteService } from 'src/app/shared/service/restaurante.service';
import { DadosCompartilhadosEditarRestauranteService } from 'src/app/shared/service/dados-compartilhados-editar-restaurante.service';
import { Restaurante } from 'src/app/shared/model/Restaurante';
import { AuthServiceService } from 'src/app/shared/service/auth-service.service';
import { Endereco } from 'src/app/shared/model/Endereco';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-restaurante-editar-restaurante',
  templateUrl: './restaurante-editar-restaurante.component.html',
  styleUrls: ['./restaurante-editar-restaurante.component.scss']
})
export class RestauranteEditarRestauranteComponent implements OnInit {

  idRestaurante: number;
  nome: String;
  cnpj: String;
  cidade: String;
  estado: String;
  cep: String;
  rua: String;
  bairro: String;
  numero: number;
  private imagemSelecionada: File | null = null;

  restaurante: Restaurante = new Restaurante();
  private subscription: Subscription;


  selecionarImagem(event: any): void {
    const files = event.target.files;

    if (files && files.length > 0) {
      this.imagemSelecionada = files[0];

      this.converterArquivoParaBase64(this.imagemSelecionada!);
    }
  }

  private converterArquivoParaBase64(arquivo: File): void {
    const leitor = new FileReader();

    leitor.onload = (e) => {

      const conteudoBase64 = leitor.result as string;

      this.dadosCompartilhadosRestauranteService.setImagem(conteudoBase64);
    };

    leitor.readAsDataURL(arquivo);
  }

  constructor(
    private router: Router,
    private dadosCompartilhadosEditarRestauranteService: DadosCompartilhadosEditarRestauranteService,
    private restauranteService: RestauranteService,
    private authService: AuthServiceService,
    private dadosCompartilhadosRestauranteService: DadosCompartilhadosRestauranteService
  ) { }

  ngOnInit(): void {
    this.preencherCampos();
  }

  preencherCampos() {
    const idRestaurante = this.dadosCompartilhadosEditarRestauranteService.getId();

    if (idRestaurante) {
      console.log("Id do restaurante para editar clicado: " + idRestaurante);

      this.subscription = this.restauranteService.buscarRestaurantePeloId(idRestaurante)
        .subscribe((restaurante: Restaurante) => {

          console.log("id do endereco do restaurante: " + restaurante.endereco.id)
          this.idRestaurante = restaurante.id;
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

    console.log(this.restaurante)

    Swal.fire({
      title: "Tem certeza disso?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sim, alterar!",
      cancelButtonText: "Cancelar"
    }).then((result) => {

      if (result.isConfirmed) {
        const pessoaAssociada = this.authService.getPessoa();
        const enderecoAssociado: Endereco = new Endereco();

        enderecoAssociado.cidade = this.cidade;
        enderecoAssociado.cep = this.cep;
        enderecoAssociado.bairro = this.bairro;
        enderecoAssociado.estado = this.estado;
        enderecoAssociado.numero = this.numero;
        enderecoAssociado.rua = this.rua;

        this.restaurante.id = this.idRestaurante;
        this.restaurante.cnpj = this.cnpj;
        this.restaurante.nome = this.nome;
        this.restaurante.pessoa = pessoaAssociada;
        this.restaurante.endereco = enderecoAssociado;
        this.restaurante.imagem = this.dadosCompartilhadosRestauranteService.getImagem();

        console.log(this.restaurante);

        this.restauranteService.atualizar(this.restaurante)
          .subscribe(
            restauranteAtualizado => {
              console.log('Restaurante atualizado:', restauranteAtualizado);
            },
            error => {
              console.error('Erro ao atualizar restaurante:', error);
            }
          );
        Swal.fire("Salvo com Sucesso!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Edição cancelada!", "", "info");
      }
    });
  }
}
