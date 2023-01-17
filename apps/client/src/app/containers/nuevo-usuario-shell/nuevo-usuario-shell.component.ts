import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UsuarioService } from '../../usuario.service';
import { RouterModule, Router } from '@angular/router';
import { UsuarioPersistenciaProps } from '@monorepo.seminario/modelos';



@Component({
  selector: 'app-nuevo-usuario-shell',
  templateUrl: './nuevo-usuario-shell.component.html',
  styleUrls: ['./nuevo-usuario-shell.component.scss'],
})
export class NuevoUsuarioShellComponent implements OnInit {
  constructor(private service: UsuarioService, private formBuilder: FormBuilder,private router: Router){}

  ngOnInit( ){
    this.inicializar();
  }

  newUser: FormGroup = new FormGroup({});
  @Input() titulo : string = 'Nuevo Usuario';
  @Input() userEdit? : UsuarioPersistenciaProps;
  @Output() EmitterSalir : EventEmitter<boolean> = new EventEmitter();
  

  inicializar( ){
    this.newUser = this.formBuilder.group({
      cedula: new FormControl(this.userEdit?.cedula),
      nombres: new FormControl(this.userEdit?.nombres),
      apellidos: new FormControl(this.userEdit?.apellidos),
      telefono: new FormControl(this.userEdit?.telefono),
      horas: new FormControl(this.userEdit?.horas),
      valorHora: new FormControl(this.userEdit?.valorHora),
    });
  }

  guardarUsuario(){
    if(!this.userEdit){
      this.service.guardarUsuario(this.newUser.value).subscribe(t => this.router.navigate(['/']));
    }else{
      this.service.editarUsuario(this.userEdit._id, this.newUser.value).subscribe(t => this.salir());
    }
  }


  salir(){
    this.EmitterSalir.emit(false);
    this.router.navigate(['/']);
  }

}
