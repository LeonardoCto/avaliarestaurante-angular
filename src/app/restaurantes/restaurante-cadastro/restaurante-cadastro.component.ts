import { DadosCompartilhadosRestauranteService } from './../../shared/service/dados-compartilhados-restaurante.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Restaurante } from 'src/app/shared/model/Restaurante';

@Component({
  selector: 'app-restaurante-cadastro',
  templateUrl: './restaurante-cadastro.component.html',
  styleUrls: ['./restaurante-cadastro.component.scss']
})
export class RestauranteCadastroComponent implements OnInit {

  constructor(private router: Router, private dadosCompartilhadosRestauranteService: DadosCompartilhadosRestauranteService) { }

  nome: String = "";

  restaurante: Restaurante = new Restaurante();

  avancar() {

    if (this.nome) {

    this.dadosCompartilhadosRestauranteService.setNome(this.nome);

    console.log("nome: " + this.nome);

    this.router.navigate(['/endereco']);

    }
  }
  ngOnInit(): void {

  }
}
