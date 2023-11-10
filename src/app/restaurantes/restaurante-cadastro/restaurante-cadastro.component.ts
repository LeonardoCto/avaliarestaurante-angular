import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurante-cadastro',
  templateUrl: './restaurante-cadastro.component.html',
  styleUrls: ['./restaurante-cadastro.component.scss']
})
export class RestauranteCadastroComponent  {

  constructor(private router: Router) { }

  avancar() {

    this.router.navigate(['/endereco']);
  }

}
