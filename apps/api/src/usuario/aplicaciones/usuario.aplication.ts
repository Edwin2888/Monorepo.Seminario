import { HttpException, Injectable } from '@nestjs/common';
import { UsuarioPersistencia } from '../modelos/usuario';
import { UsuarioService } from '../servicios/usuario.service';

@Injectable()
export class UsuarioAplicacion {
    static readonly USUARIO_NO_ENCONTRADO = 'No se encontro el registro del usuario';

    constructor(private usuarioService: UsuarioService){}

    async obtenerTodosLosUsuarios(): Promise<
        UsuarioPersistencia[]
    > {
        return await this.usuarioService.obtenerUsuarios();
    }

    async crearUsuario(usuario: UsuarioPersistencia){
        const usuarioPersistencia = new UsuarioPersistencia(usuario);

        const data = await this.usuarioService.agregarUsuario(
            usuarioPersistencia
        );

        return data;
    }

    async editarUsuario(usuarioEditado: UsuarioPersistencia, id: string){
        this.obtenerUsuario(id);
        const usuarioPersistencia = new UsuarioPersistencia({
            ...usuarioEditado,
            _id: id
        });
        const data = await this.usuarioService.actualizarUsuario(
            usuarioPersistencia
        );

        return data;
    }

    private async obtenerUsuario(id: string) {
        const usuario = await this.usuarioService.obtenerPorId(
            id,
        );
    
        if (!usuario)
            throw new HttpException(
                UsuarioAplicacion.USUARIO_NO_ENCONTRADO, 400
            );
        return usuario;
    }
}