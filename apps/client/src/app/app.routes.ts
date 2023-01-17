import { Route } from '@angular/router';
import { UsuariosShellComponent } from './containers/usuarios-shell/usuarios-shell.component';
import { NuevoUsuarioShellComponent } from './containers/nuevo-usuario-shell/nuevo-usuario-shell.component';

export const appRoutes: Route[] = [
    {
        path: '',
        component: UsuariosShellComponent
    },
    {
        path: 'usuarios/nuevo',
        component: NuevoUsuarioShellComponent
    },
    {
        path: 'usuarios/nuevo/{id}',
        component: NuevoUsuarioShellComponent
    }
];
