import { Component } from '@angular/core';
import { PessoaService } from 'src/app/shared/service/PessoaService';
import { Router } from '@angular/router';
import { Pessoa } from 'src/app/shared/model/Pessoa';
import { PessoaDTO } from 'src/app/shared/model/PessoaDTO';

@Component({
  selector: 'app-usuario-login',
  templateUrl: './usuario-login.component.html',
  styleUrls: ['./usuario-login.component.scss']
})
export class UsuarioLoginComponent {

  constructor(private pessoaService: PessoaService, private router: Router) {}

  email: string = '';
  senha: string = '';

  cadastrar(){
    this.router.navigate(['/cadastrar']);
  }

  login() {
    const pessoaDTO: PessoaDTO = {
      email: this.email,
      senha: this.senha
    };
    this.pessoaService.login(pessoaDTO).subscribe(
      (response) => {

        console.log('Login bem-sucedido:', response);


        this.router.navigate(['/']);
      },
      (error) => {
        console.error('Erro no login:', error);
      }
    );
  }
}

