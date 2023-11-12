import { DadosCompartilhadosCadastroService } from './../../shared/service/dados-compartilhados-cadastro.service';
import { Component, NgModule } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario-cadastro',
  templateUrl: './usuario-cadastro.component.html',
  styleUrls: ['./usuario-cadastro.component.scss']
})
export class UsuarioCadastroComponent {

  constructor(private router : Router, private dadosCompartilhadosCadastroService : DadosCompartilhadosCadastroService) { }

     nome: String;
     email: String;
     cpf: String;
     senha: String;

  cadastrarEndereco(){

    if (this.nome || this.email || this.cpf || this.senha) {

      this.dadosCompartilhadosCadastroService.setDados(this.nome, this.email, this.cpf, this.senha);

      console.log("Nome: " + this.nome);
      console.log("Email: " + this.email);
      console.log("CPF: " + this.cpf);
      console.log("Senha: " + this.senha);

      this.router.navigate(['/localidade']);
      }
    }

  voltar(){
    this.router.navigate(['/login']);
  }
}

