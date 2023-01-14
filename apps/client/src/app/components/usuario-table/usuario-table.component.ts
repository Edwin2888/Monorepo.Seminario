import { Component } from '@angular/core';
import { UsuarioService } from '../../usuario.service';
import { Observable } from 'rxjs';
import { Usuarios } from '../../interfaces/usuario';

@Component({
  selector: 'app-usuario-table',
  templateUrl: './usuario-table.component.html',
  styleUrls: ['./usuario-table.component.scss'],
})
export class UsuarioTableComponent {
  constructor(private service: UsuarioService) {
    this.obtenerUsuarios();
  }
  usuarios$!: Observable<Usuarios>;

  obtenerUsuarios(){
    this.usuarios$ = this.service.obtenerUsuarios();
  }
}
