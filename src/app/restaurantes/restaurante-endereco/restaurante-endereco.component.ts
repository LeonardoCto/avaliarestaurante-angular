import { Restaurante } from 'src/app/shared/model/Restaurante';
import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DadosCompartilhadosRestauranteService } from 'src/app/shared/service/dados-compartilhados-restaurante.service';
import { Endereco } from 'src/app/shared/model/Endereco';
import { NgFor } from '@angular/common';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-restaurante-endereco',
  templateUrl: './restaurante-endereco.component.html',
  styleUrls: ['./restaurante-endereco.component.scss']
})
export class RestauranteEnderecoComponent {

  constructor(private router: Router, private dadosCompartilhadosService : DadosCompartilhadosRestauranteService) { }

  cnpj: String = '';
  cidade: String = '';
  estado: String = '';
  rua: String = '';
  cep: String = '';
  bairro: String = '';
  numero: number = 0;

  endereco: Endereco = new Endereco();
  restaurante: Restaurante = new Restaurante();

  @ViewChild('ngForm')
  public ngForm: NgForm;

  avancar(form: NgForm) {

    if(form.invalid){
      Swal.fire("Atenção", "Verifique todos os campos!", 'warning');
      return;
    }

    this.dadosCompartilhadosService.setEndereco(
    this.cidade, this.estado, this.cep, this.numero, this.bairro, this.rua);

    this.dadosCompartilhadosService.setCnpj(this.cnpj);

    console.log('CNPJ:', this.cnpj)
    console.log('Cidade:', this.cidade);
    console.log('Estado:', this.estado);
    console.log('Rua:', this.rua);
    console.log('CEP:', this.cep);
    console.log('Bairro:', this.bairro);
    console.log('Número:', this.numero);

    this.router.navigate(['/imagem']);
  }

}
