import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { UsuarioComponent } from './usuario/usuario.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, UsuarioComponent],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
})
export class AppModule {}
