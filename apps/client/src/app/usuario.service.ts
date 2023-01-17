import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuarioPersistencia } from '@monorepo.seminario/modelos';
import { apiUrl } from './app-urls';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  obtenerUsuarios(): Observable<UsuarioPersistencia[]> {
    return this.http.get<UsuarioPersistencia[]>(apiUrl.obtenerUsuarios);
  }

  guardarUsuario(usuario: UsuarioPersistencia){
    return this.http.post<UsuarioPersistencia>(apiUrl.nuevoUsuarios, usuario);
  }

  editarUsuario(id: string | undefined ,usuario: UsuarioPersistencia){
    return this.http.put<UsuarioPersistencia>(`${apiUrl.editarUsuario}/${id}/editar`,usuario);
  }
}
