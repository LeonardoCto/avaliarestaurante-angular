import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioLoginComponent } from './usuario-login/usuario-login.component';
import { UsuarioCadastroComponent } from './usuario-cadastro/usuario-cadastro.component';
import { UsuarioEnderecoComponent } from './usuario-endereco/usuario-endereco.component';


const routes: Routes = [
  {path: "login", component: UsuarioLoginComponent},
  {path: "cadastrar", component: UsuarioCadastroComponent},
  {path: "localidade", component: UsuarioEnderecoComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
