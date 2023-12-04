import { AuthServiceService } from './../../shared/service/auth-service.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PessoaService } from 'src/app/shared/service/PessoaService';
import { Pessoa } from 'src/app/shared/model/Pessoa';

@Component({
  selector: 'app-usuario-editar-perfil',
  templateUrl: './usuario-editar-perfil.component.html',
  styleUrls: ['./usuario-editar-perfil.component.scss']
})
export class UsuarioEditarPerfilComponent implements OnInit{

  constructor(private router : Router,
    private authServiceService : AuthServiceService,
    private pessoaService : PessoaService) { }

  cidade: String;
  estado: String;
  cep: String;
  rua: String;
  bairro: String;
  numero: number;

  private subscription: Subscription;

  ngOnInit(): void {
    this.preencherCampos();
  }

  preencherCampos() {
    const idUsuario = this.authServiceService.getUserId();

    if (idUsuario) {
      console.log("Id do usuario para editar clicado: " + idUsuario);

      this.subscription = this.pessoaService.buscarPessoaPeloId(idUsuario)
        .subscribe((pessoa: Pessoa) => {
          this.cidade = pessoa.endereco.cidade;
          this.estado = pessoa.endereco.estado;
          this.cep = pessoa.endereco.cep;
          this.rua = pessoa.endereco.rua;
          this.bairro = pessoa.endereco.bairro;
          this.numero = pessoa.endereco.numero;
        });
    }
  }

}

