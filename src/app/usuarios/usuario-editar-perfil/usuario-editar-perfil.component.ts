import { AuthServiceService } from './../../shared/service/auth-service.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PessoaService } from 'src/app/shared/service/PessoaService';
import { Pessoa } from 'src/app/shared/model/Pessoa';
import Swal from 'sweetalert2';
import { Endereco } from 'src/app/shared/model/Endereco';

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

  pessoaAtualizada : Pessoa = new Pessoa();

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
  atualizarRestaurante(): void {
    Swal.fire({
      title: "Deseja salvar alterações?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Salvar",
      denyButtonText: `Cancelar`
    }).then((result) => {
      if (result.isConfirmed) {

        const idUsuario = this.authServiceService.getUserId();

        const enderecoNovo : Endereco = new Endereco();

        enderecoNovo.cidade = this.cidade;
        enderecoNovo.estado = this.estado;
        enderecoNovo.cep = this.cep;
        enderecoNovo.bairro = this.bairro;
        enderecoNovo.numero = this.numero;
        enderecoNovo.rua = this.rua;

        this.pessoaAtualizada.id = idUsuario!;
        this.pessoaAtualizada.cpf = this.authServiceService.getPessoa().cpf;
        this.pessoaAtualizada.email = this.authServiceService.getPessoa().email;
        this.pessoaAtualizada.nome = this.authServiceService.getPessoa().nome;
        this.pessoaAtualizada.senha = this.authServiceService.getPessoa().senha;
        this.pessoaAtualizada.endereco = enderecoNovo;


        this.pessoaService.atualizar(this.pessoaAtualizada)
          .subscribe(
            pessoaAtualizadaa => {
              console.log('PessoaAtualizadaa atualizada:', pessoaAtualizadaa);
            },
            error => {
              console.error('Erro ao atualizar pessoa:', error);
            }
          );
        Swal.fire("Alterações salvas!", "", "success");
      }
    });
  }
}

