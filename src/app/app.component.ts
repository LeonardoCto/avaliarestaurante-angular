import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from './shared/service/auth-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'avaliarestaurante-angular';

  constructor(private router: Router, private authService: AuthServiceService) { }

  isLoginPage(): boolean {
    const currentUrl = this.router.url;
    return currentUrl === '/login' || currentUrl === '/cadastrar' || currentUrl === '/localidade';
  }

  sair() {
    // Exibir o SweetAlert para confirmar a saída
    Swal.fire({
      title: 'Deseja sair?',
      text: 'Você será desconectado da sua conta.',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sair',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.authService.setUserId(null);
        this.router.navigate(['/login']);
      }
    });
  }

  verificaID() {
    const userId = this.authService.getUserId();
    console.log(userId);

    if (userId !== null) {
      this.router.navigate(['/cadastro']);
    } else {
      Swal.fire({
        title: 'Você precisa fazer login',
        text: 'Por favor, faça login antes de cadastrar um restaurante.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Cadastrar-se',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          this.router.navigate(['/login']);
        }
      });
    }
  }
}
