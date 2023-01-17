import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Usuario } from "../../../typeorm";
import { Repository } from "typeorm";
import { CreateUsuarioDto } from "../dto/create-usuario.dto";

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario) private readonly userRepository: Repository<Usuario>,
  ) {}

  createUser(createUserDto: CreateUsuarioDto) {
    const newUser = this.userRepository.create(createUserDto);
    return this.userRepository.save(newUser);
  }
      
  findUsersById(_id: number) {
    return this.userRepository.findOneBy({_id});
  }

  getUsers() {
    return this.userRepository.find();
  }
}