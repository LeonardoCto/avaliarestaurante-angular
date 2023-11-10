import { Component } from '@angular/core';
import { Router
 } from '@angular/router';
@Component({
  selector: 'app-restaurante-imagem',
  templateUrl: './restaurante-imagem.component.html',
  styleUrls: ['./restaurante-imagem.component.scss']
})
export class RestauranteImagemComponent {

  constructor(private router: Router) { }

  avancar() {

    this.router.navigate(['/imagem']);
  }

}
