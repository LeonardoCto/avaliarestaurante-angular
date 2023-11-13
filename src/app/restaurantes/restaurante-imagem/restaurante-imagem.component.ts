import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DadosCompartilhadosRestauranteService } from 'src/app/shared/service/dados-compartilhados-restaurante.service';

@Component({
  selector: 'app-restaurante-imagem',
  templateUrl: './restaurante-imagem.component.html',
  styleUrls: ['./restaurante-imagem.component.scss']
})
export class RestauranteImagemComponent {

  selectedFile: File | null = null;

  constructor(private router: Router, private dadosCompartilhadosService: DadosCompartilhadosRestauranteService) { }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
    if (this.selectedFile) {
      this.dadosCompartilhadosService.setImagemRestaurante(this.selectedFile);
      console.log("imagem selecionada:" + this.selectedFile)
    }
  }

  avancar() {
    this.router.navigate(['/finalizar']);
  }
}
