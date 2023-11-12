import { Component } from '@angular/core';
import { UsuarioServiceService } from 'src/app/shared/service/usuario-service.service';
import { Router } from '@angular/router';
import { Pessoa } from 'src/app/shared/model/Pessoa';
import { PessoaDTO } from 'src/app/shared/model/PessoaDTO';

@Component({
  selector: 'app-usuario-login',
  templateUrl: './usuario-login.component.html',
  styleUrls: ['./usuario-login.component.scss']
})
export class UsuarioLoginComponent {

  constructor(private usuarioService: UsuarioServiceService, private router: Router) {}

  email: string = '';
  senha: string = '';

  login() {
    const pessoaDTO: PessoaDTO = {
      email: this.email,
      senha: this.senha
    };
    this.usuarioService.login(pessoaDTO).subscribe(
      (response) => {

        console.log('Login bem-sucedido:', response);


        this.router.navigate(['/cadastro']);
      },
      (error) => {
        console.error('Erro no login:', error);
      }
    );
  }
}

