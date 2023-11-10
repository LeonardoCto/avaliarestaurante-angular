import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestauranteListagemComponent } from './restaurante-listagem/restaurante-listagem.component';
import { RestauranteCadastroComponent } from './restaurante-cadastro/restaurante-cadastro.component';

const routes: Routes = [
  {path: "", component: RestauranteListagemComponent},
  {path: "cadastro", component: RestauranteCadastroComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantesRoutingModule { }
