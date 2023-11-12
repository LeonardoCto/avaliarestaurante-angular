import { Pessoa } from 'src/app/shared/model/Pessoa';
import { PessoaService } from './../../shared/service/PessoaService';
import { DadosCompartilhadosCadastroService } from './../../shared/service/dados-compartilhados-cadastro.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario-endereco',
  templateUrl: './usuario-endereco.component.html',
  styleUrls: ['./usuario-endereco.component.scss']
})
export class UsuarioEnderecoComponent {

  constructor(private router : Router, private dadosCompartilhadosCadastroService : DadosCompartilhadosCadastroService,
    private pessoaService : PessoaService) { }

  voltar(){
    this.router.navigate(['/cadastrar']);
  }

  CEP: String;
  rua: String;
  numero: number;
  cidade: String;
  estado: String;
  bairro: String;

  finalizar(){
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
      }
    );

    this.router.navigate(['/login']);
  }

}
