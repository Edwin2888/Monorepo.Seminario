import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from "../../typeorm";

@Injectable()
export class UsuariosService {
  constructor(@InjectRepository(Usuario) private readonly userRepository: Repository<Usuario>){}

  create(createUsuarioDto: CreateUsuarioDto) {
    const newUser = this.userRepository.create(createUsuarioDto);
    return this.userRepository.save(newUser);
  }

  findAll() {
    return this.userRepository.find();
  }

  findOne(id: number) {
    return this.userRepository.findOneBy({id});
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return this.userRepository.update(updateUsuarioDto, {id});
  }

  remove(id: number) {
    return `This action removes a #${id} usuario`;
  }
}
