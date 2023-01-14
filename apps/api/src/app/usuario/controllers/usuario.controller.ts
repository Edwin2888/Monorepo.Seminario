import { Controller, Get, Put, Post, Query, Param } from '@nestjs/common';
import { UsuarioAplicacion } from '../aplicaciones/usuario.aplication';
import { UsuarioPersistencia } from '@monorepo.seminario/modelos';

@Controller('usuarios')
export class UsuariosController {
    constructor(private aplicacion: UsuarioAplicacion) {}

    @Get()
    async obtenerTodosLosUsuarios(): Promise<UsuarioPersistencia[]> {
        return await this.aplicacion.obtenerTodosLosUsuarios();
    }

    @Post()
    async guardarUsuario(
        @Query() usuario: UsuarioPersistencia
    ): Promise<UsuarioPersistencia> {
        return await this.aplicacion.crearUsuario(usuario);
    }

    @Put(':id/editar')
    async actualizarUsuario(
        @Param('id') id: string,
        @Query() usuario: UsuarioPersistencia
    ): Promise<UsuarioPersistencia> {
        return await this.aplicacion.editarUsuario(usuario,id);
    }
}
