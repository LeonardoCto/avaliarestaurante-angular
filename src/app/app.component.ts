import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from './shared/service/auth-service.service';

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

  cadastroRestaurante() {

    const userId = this.authService.getUserId();
    console.log(userId);
    
    if (userId !== null) {
      this.router.navigate(['/cadastro']);
    } else {

      this.router.navigate(['/login']);
    }
  }
}
