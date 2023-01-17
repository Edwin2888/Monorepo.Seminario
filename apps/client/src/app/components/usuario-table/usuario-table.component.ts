import { Component } from '@angular/core';
import { UsuarioService } from '../../usuario.service';
import { Observable } from 'rxjs';
import { Usuarios } from '../../interfaces/usuario';
import { UsuarioPersistenciaProps } from '@monorepo.seminario/modelos';

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
  editUser: boolean = false;
  userSelect? : UsuarioPersistenciaProps;

  obtenerUsuarios(){
    this.usuarios$ = this.service.obtenerUsuarios();
  }

  onEdit ( oUser: UsuarioPersistenciaProps ) {
   console.log(oUser);
   this.editUser = true;
   this.userSelect = oUser;

  }

  onDelete(id: string | undefined) {
    console.log(id);
    this.service.deleteUsuario(id).subscribe(t => this.obtenerUsuarios());
  }


  salirEdit(event: boolean){
    this.editUser = event;
  }  
}
