import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RestaurantesRoutingModule } from './restaurantes-routing.module';
import { RestauranteListagemComponent } from './restaurante-listagem/restaurante-listagem.component';
import { RestauranteCadastroComponent } from './restaurante-cadastro/restaurante-cadastro.component';
import { RestauranteEnderecoComponent } from './restaurante-endereco/restaurante-endereco.component';
import { RestauranteImagemComponent } from './restaurante-imagem/restaurante-imagem.component';
import { RestauranteFinalizarComponent } from './restaurante-finalizar/restaurante-finalizar.component';

@NgModule({
  declarations: [
    RestauranteListagemComponent,
    RestauranteCadastroComponent,
    RestauranteEnderecoComponent,
    RestauranteImagemComponent,
    RestauranteFinalizarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RestaurantesRoutingModule
  ]
})
export class RestaurantesModule { }
