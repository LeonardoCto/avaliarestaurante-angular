import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RestaurantesRoutingModule } from './restaurantes-routing.module';
import { RestauranteListagemComponent } from './restaurante-listagem/restaurante-listagem.component';
import { RestauranteCadastroComponent } from './restaurante-cadastro/restaurante-cadastro.component';

@NgModule({
  declarations: [
    RestauranteListagemComponent,
    RestauranteCadastroComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RestaurantesRoutingModule
  ]
})
export class RestaurantesModule { }
