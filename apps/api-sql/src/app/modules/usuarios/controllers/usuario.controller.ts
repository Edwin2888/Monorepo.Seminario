import { Controller, Get, Post, UsePipes, ValidationPipe, Body } from '@nestjs/common';
import { UsuarioService } from '../servicios/usuario.service';
import { CreateUsuarioDto } from '../dto/create-usuario.dto';

@Controller('users')
export class UsuariosController {
    constructor(private service: UsuarioService) {}

    @Get()
    getUsers() {
        return this.service.getUsers();
    }

    @Post('create')
    @UsePipes(ValidationPipe)
    createUsers(@Body() createUserDto: CreateUsuarioDto) {
        return this.service.createUser(createUserDto);
    }
}
