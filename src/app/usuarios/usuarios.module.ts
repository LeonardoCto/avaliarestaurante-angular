import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuarioLoginComponent } from './usuario-login/usuario-login.component';
import { FormsModule } from '@angular/forms';
import { UsuarioCadastroComponent } from './usuario-cadastro/usuario-cadastro.component';
import { UsuarioEnderecoComponent } from './usuario-endereco/usuario-endereco.component';


@NgModule({
  declarations: [
    UsuarioLoginComponent,
    UsuarioCadastroComponent,
    UsuarioEnderecoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    UsuariosRoutingModule
  ]
})
export class UsuariosModule { }
