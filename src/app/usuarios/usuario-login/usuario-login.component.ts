import { Component } from '@angular/core';
import { PessoaService } from 'src/app/shared/service/PessoaService';
import { Router } from '@angular/router';
import { Pessoa } from 'src/app/shared/model/Pessoa';
import { PessoaDTO } from 'src/app/shared/model/PessoaDTO';
import { AuthServiceService } from 'src/app/shared/service/auth-service.service';

@Component({
  selector: 'app-usuario-login',
  templateUrl: './usuario-login.component.html',
  styleUrls: ['./usuario-login.component.scss']
})
export class UsuarioLoginComponent {

  constructor(private pessoaService: PessoaService,private authService : AuthServiceService, private router: Router) {}

  email: string = '';
  senha: string = '';
  isLoginInProgress: boolean = false;
  loginError: string = '';

  cadastrar(){
    this.router.navigate(['/cadastrar']);
  }

  login() {
    this.isLoginInProgress = true;
    this.loginError = '';

    const pessoaDTO: PessoaDTO = {
      email: this.email,
      senha: this.senha
    };

    this.pessoaService.login(pessoaDTO).subscribe(
      (pessoa) => {
        console.log('Login bem-sucedido. ID do usuário:', pessoa.id);

        this.authService.setUserId(pessoa.id);
        this.authService.setPessoa(pessoa);

        this.router.navigate(['/']);
      },
      (error) => {
        console.error('Erro no login:', error);
        this.loginError = 'Erro ao fazer login. Verifique suas credenciais.';
      }
    ).add(() => {
      this.isLoginInProgress = false;
    });
  }
}
