import { AuthServiceService } from './../../shared/service/auth-service.service';
import { Component, OnInit } from '@angular/core';
import { Restaurante } from 'src/app/shared/model/Restaurante';
import { RestauranteService } from './../../shared/service/restaurante.service';
import { DadosCompartilhadosEditarRestauranteService } from 'src/app/shared/service/dados-compartilhados-editar-restaurante.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-restaurante-listar-edicao',
  templateUrl: './restaurante-listar-edicao.component.html',
  styleUrls: ['./restaurante-listar-edicao.component.scss']
})
export class RestauranteListarEdicaoComponent implements OnInit{

  constructor(private restauranteService : RestauranteService, private authServiceService : AuthServiceService,
    private dadosCompartilhadosEditarRestauranteService : DadosCompartilhadosEditarRestauranteService) { }

  public restaurantes: Array<Restaurante> = new Array();

  public idSelecionado: number;

  ngOnInit(): void {
    this.buscarRestaurantes();
}

selecionarRestaurante(id: number) {
  this.idSelecionado = id;
  this.dadosCompartilhadosEditarRestauranteService.setId(this.idSelecionado);

  const idClicado = this.dadosCompartilhadosEditarRestauranteService.getId();
  console.log('Restaurante selecionado com id:', idClicado);
}

deletarRestaurante(id: number) {
  Swal.fire({
    title: "Tem certeza disso?",
    text: "Você não poderá desfazer isso futuramente!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sim, deletar!",
    cancelButtonText: "Cancelar"
  }).then((result) => {
    if (result.isConfirmed) {
      this.idSelecionado = id;

      this.restauranteService.deletarRestaurante(this.idSelecionado).subscribe(
        () => {
          console.log('Restaurante deletado com sucesso');
          this.restaurantes = this.restaurantes.filter(restaurante => restaurante.id !== this.idSelecionado);
        },
        erro => {
          console.log('Erro ao deletar restaurante', erro);
        }
      );
      Swal.fire({
        title: "Restaurante deletado!",
        text: "voltar para a lista.",
        icon: "success"
      });
    }
  });
}

buscarRestaurantes(){
  const id = this.authServiceService.getUserId();
  console.log("id do usuario: " + id);

  this.restauranteService.listarPorIdUsuario(id!).subscribe(
    resultado => {
      this.restaurantes = resultado;
    },
    erro => {
      console.log('Erro ao buscar restaurantes', erro);
    }
  );
}

}
