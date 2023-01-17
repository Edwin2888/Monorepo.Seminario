import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UsuarioService } from '../../usuario.service';

@Component({
  selector: 'app-nuevo-usuario-shell',
  templateUrl: './nuevo-usuario-shell.component.html',
  styleUrls: ['./nuevo-usuario-shell.component.scss'],
})
export class NuevoUsuarioShellComponent {
  constructor(private service: UsuarioService, private formBuilder: FormBuilder){}

  formGroup: FormGroup = new FormGroup({
    cedula: {required}
  });

  guardarUsuario(){
    this.service.guardarUsuario(this.formGroup.value);
  }
}
