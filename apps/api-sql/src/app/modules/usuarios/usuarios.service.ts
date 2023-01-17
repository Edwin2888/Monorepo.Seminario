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

  findOne(_id: number) {
    return this.userRepository.findOneBy({_id});
  }

  update(_id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return this.userRepository.update({_id},updateUsuarioDto);
  }

  remove(_id: number) {
    return this.userRepository.delete({_id});
  }
}
