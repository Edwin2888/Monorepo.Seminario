import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { UsuarioTableComponent } from './components/usuario-table/usuario-table.component';
import { HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { UsuariosShellComponent } from './containers/usuarios-shell/usuarios-shell.component';
import { NuevoUsuarioShellComponent } from './containers/nuevo-usuario-shell/nuevo-usuario-shell.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    UsuarioTableComponent,
    NavBarComponent,
    UsuariosShellComponent,
    NuevoUsuarioShellComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(appRoutes), ReactiveFormsModule],
})
export class AppModule {}
