import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UsuarioService } from '../../usuario.service';

@Component({
  selector: 'app-nuevo-usuario-shell',
  templateUrl: './nuevo-usuario-shell.component.html',
  styleUrls: ['./nuevo-usuario-shell.component.scss'],
})
export class NuevoUsuarioShellComponent {
  constructor(private service: UsuarioService, private formBuilder: FormBuilder){}

  newUser: FormGroup = this.formBuilder.group({
    cedula: new FormControl(''),
    nombres: new FormControl(''),
    apellidos: new FormControl(''),
    telefono: new FormControl(''),
    hora: new FormControl(''),
    valorHora: new FormControl(''),
  });

  inicializar(){
    this.newUser
  }

  guardarUsuario(){
   this.service.guardarUsuario(this.newUser.value).subscribe(t => console.log(t));
  }
}
