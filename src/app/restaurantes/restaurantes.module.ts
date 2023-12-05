
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RatingModule } from 'primeng/rating';
import { RestaurantesRoutingModule } from './restaurantes-routing.module';
import { RestauranteListagemComponent } from './restaurante-listagem/restaurante-listagem.component';
import { RestauranteCadastroComponent } from './restaurante-cadastro/restaurante-cadastro.component';
import { RestauranteEnderecoComponent } from './restaurante-endereco/restaurante-endereco.component';
import { RestauranteImagemComponent } from './restaurante-imagem/restaurante-imagem.component';
import { RestauranteFinalizarComponent } from './restaurante-finalizar/restaurante-finalizar.component';
import { RestauranteEditarRestauranteComponent } from './restaurante-editar-restaurante/restaurante-editar-restaurante.component';
import { RestauranteListarEdicaoComponent } from './restaurante-listar-edicao/restaurante-listar-edicao.component';
import { RestauranteVisualizarComponent } from './restaurante-visualizar/restaurante-visualizar.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { RestauranteRelatorioComponent } from './restaurante-relatorio/restaurante-relatorio.component';

@NgModule({
  declarations: [
    RestauranteListagemComponent,
    RestauranteCadastroComponent,
    RestauranteEnderecoComponent,
    RestauranteImagemComponent,
    RestauranteFinalizarComponent,
    RestauranteEditarRestauranteComponent,
    RestauranteListarEdicaoComponent,
    RestauranteVisualizarComponent,
    RestauranteRelatorioComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RestaurantesRoutingModule,
    RatingModule,
    SweetAlert2Module
  ]
})
export class RestaurantesModule {
}
