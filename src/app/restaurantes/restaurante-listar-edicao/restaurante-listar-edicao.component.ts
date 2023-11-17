import { AuthServiceService } from './../../shared/service/auth-service.service';
import { Component, OnInit } from '@angular/core';
import { Restaurante } from 'src/app/shared/model/Restaurante';
import { RestauranteService } from './../../shared/service/restaurante.service';
import { DadosCompartilhadosEditarRestauranteService } from 'src/app/shared/service/dados-compartilhados-editar-restaurante.service';

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
