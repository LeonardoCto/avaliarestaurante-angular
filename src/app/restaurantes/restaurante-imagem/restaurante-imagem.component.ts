import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DadosCompartilhadosRestauranteService } from 'src/app/shared/service/dados-compartilhados-restaurante.service';

@Component({
  selector: 'app-restaurante-imagem',
  templateUrl: './restaurante-imagem.component.html',
  styleUrls: ['./restaurante-imagem.component.scss']
})
export class RestauranteImagemComponent {

  constructor(private router: Router, private dadosCompartilhadosService: DadosCompartilhadosRestauranteService) { }

  imagemSelecionada: Blob;

  onFileSelected(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const file: File | null = (inputElement.files && inputElement.files.length > 0) ? inputElement.files[0] : null;

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        if (e.target?.result) {
          const result = e.target.result;

          if (result instanceof ArrayBuffer) {

            const tipoDaImagem = 'image/jpeg';
            this.imagemSelecionada = new Blob([result], { type: tipoDaImagem });
          } else {
            console.error('Unexpected result type:', typeof result);

          }
        }
      };

      reader.readAsArrayBuffer(file);
    }
  }

  avancar() {
    if (this.imagemSelecionada) {
      this.dadosCompartilhadosService.setImagem(this.imagemSelecionada);

      console.log('Imagem :', this.imagemSelecionada);

      this.router.navigate(['/finalizar']);
    } else {
      console.error('Nenhuma imagem selecionada.');
    }
  }
}
