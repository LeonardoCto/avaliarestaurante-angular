import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DadosCompartilhadosRestauranteService } from 'src/app/shared/service/dados-compartilhados-restaurante.service';

@Component({
  selector: 'app-restaurante-imagem',
  templateUrl: './restaurante-imagem.component.html',
  styleUrls: ['./restaurante-imagem.component.scss']
})
export class RestauranteImagemComponent {

  private imagemSelecionada: File | null = null;

  constructor(private router: Router, private dadosCompartilhadosService: DadosCompartilhadosRestauranteService) { }

  selecionarImagem(event: any): void {
    const files = event.target.files;

    if (files && files.length > 0) {
      this.imagemSelecionada = files[0];

      this.converterArquivoParaBase64(this.imagemSelecionada!);
    }
  }

  avancar() {
    if (this.imagemSelecionada) {
      this.router.navigate(['/finalizar']);
    } else {
      console.error('Nenhuma imagem selecionada.');
    }
  }

  private converterArquivoParaBase64(arquivo: File): void {
    const leitor = new FileReader();

    leitor.onload = (e) => {

      const conteudoBase64 = leitor.result as string;

      this.dadosCompartilhadosService.setImagem(conteudoBase64);
    };

    leitor.readAsDataURL(arquivo);
  }
}
