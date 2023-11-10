import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestauranteListagemComponent } from './restaurante-listagem/restaurante-listagem.component';
import { RestauranteCadastroComponent } from './restaurante-cadastro/restaurante-cadastro.component';
import { RestauranteEnderecoComponent } from './restaurante-endereco/restaurante-endereco.component';
import { RestauranteImagemComponent } from './restaurante-imagem/restaurante-imagem.component';

const routes: Routes = [
  {path: "", component: RestauranteListagemComponent},
  {path: "cadastro", component: RestauranteCadastroComponent},
  {path: "endereco", component: RestauranteEnderecoComponent},
  {path: "imagem", component: RestauranteImagemComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantesRoutingModule { }
