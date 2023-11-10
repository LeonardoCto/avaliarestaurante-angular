import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurante-endereco',
  templateUrl: './restaurante-endereco.component.html',
  styleUrls: ['./restaurante-endereco.component.scss']
})
export class RestauranteEnderecoComponent {

  constructor(private router: Router) { }

  avancar() {

    this.router.navigate(['/imagem']);
  }

}
