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

async exibirModalDeFiltros() {
  const { value: formValues } = await Swal.fire({
    title: 'Filtros de Busca',
    html:
      '<div>Preencha os filtros que você desejar para encontrar um restaurante:</div>' +
      '<input id="nome" class="swal2-input" placeholder="Nome">' +
      '<input id="rua" class="swal2-input" placeholder="Rua">' +
      '<input id="cep" class="swal2-input" placeholder="CEP">' +
      '<input id="bairro" class="swal2-input" placeholder="Bairro">' +
      '<input id="cidade" class="swal2-input" placeholder="Cidade">',
    focusConfirm: false,
    preConfirm: () => {
      return {
        nome: (document.getElementById('nome') as HTMLInputElement).value,
        rua: (document.getElementById('rua') as HTMLInputElement).value,
        cep: (document.getElementById('cep') as HTMLInputElement).value,
        bairro: (document.getElementById('bairro') as HTMLInputElement).value,
        cidade: (document.getElementById('cidade') as HTMLInputElement).value,
      };
    },
  });

  if (formValues) {
    this.buscarComSeletor(formValues);
  }
}

buscarComSeletor(seletor: SeletorRestaurante) {
  this.restauranteService.buscarComSeletor(seletor).subscribe(
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
