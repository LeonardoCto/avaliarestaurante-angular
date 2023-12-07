import { Pessoa } from 'src/app/shared/model/Pessoa';
import { PessoaService } from './../../shared/service/PessoaService';
import { DadosCompartilhadosCadastroService } from './../../shared/service/dados-compartilhados-cadastro.service';
import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuario-endereco',
  templateUrl: './usuario-endereco.component.html',
  styleUrls: ['./usuario-endereco.component.scss']
})
export class UsuarioEnderecoComponent {

  constructor(private router: Router, private dadosCompartilhadosCadastroService: DadosCompartilhadosCadastroService,
    private pessoaService: PessoaService) { }

  voltar() {
    this.router.navigate(['/cadastrar']);
  }

  @ViewChild('ngForm')
  public ngForm: NgForm;

  CEP: String;
  rua: String;
  numero: number;
  cidade: String;
  estado: String;
  bairro: String;

  finalizar(form: NgForm) {

    if (form.invalid) {
      return;
    } else {
      this.dadosCompartilhadosCadastroService.setEndereco(this.CEP, this.rua, this.cidade, this.numero, this.bairro, this.estado);

      const pessoaDados = this.dadosCompartilhadosCadastroService.getDados();
      const pessoaEndereco = this.dadosCompartilhadosCadastroService.getEndereco();

      const pessoa: Pessoa = new Pessoa();

      pessoa.nome = pessoaDados.nome;
      pessoa.email = pessoaDados.email;
      pessoa.cpf = pessoaDados.cpf;
      pessoa.senha = pessoaDados.senha;
      pessoa.endereco = pessoaEndereco;

      this.pessoaService.salvar(pessoa).subscribe(
        (pessoaSalva) => {

          console.log('Pessoa salva com sucesso: ', pessoaSalva);

        },
        (error) => {
          console.error('Erro ao cadastrar pessoa:', error);
          console.error('Erro ao cadastrar o produto:', error);
          if (error.status === 400 && error.error === 'Pessoa já cadastrada com este CPF!') {
            Swal.fire({
              icon: 'error',
              title: 'Ops...',
              text: 'Usuário já cadastrado com este CPF!',
            });
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Ops...',
              text: 'Usuário já cadastrado com este CPF!',
            });
          }
        }
      );

      this.router.navigate(['/login']);
    }
  }
}
