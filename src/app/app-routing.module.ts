import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'restaurantes',
    loadChildren:() => import('./restaurantes/restaurantes.module').then(m => m.RestaurantesModule)
  },
  {
    path: 'usuarios',
    loadChildren:() => import('./usuarios/usuarios.module').then(m => m.UsuariosModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
