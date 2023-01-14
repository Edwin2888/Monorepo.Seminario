import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { USUARIOS_MODEL_NAME } from "../esquemas/usuario.esquema";
import { UsuarioPersistencia } from '@monorepo.seminario/modelos';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectModel(USUARIOS_MODEL_NAME)
    private usuarios: Model<UsuarioPersistencia>
  ) {}

  async obtenerUsuarios(): Promise<UsuarioPersistencia[]>{
    return await this.usuarios.find({}).lean();
  }

  async agregarUsuario(usuario: UsuarioPersistencia): Promise<UsuarioPersistencia>{
    return (await this.usuarios.create(usuario)).toObject();
  }

  async actualizarUsuario(usuario: UsuarioPersistencia): Promise<UsuarioPersistencia>{
    return await this.usuarios
    .findOneAndUpdate({ _id: usuario._id }, usuario, { new: true })
    .lean();
  }

  async obtenerPorId(_id: string): Promise<UsuarioPersistencia>{
    const data = await this.usuarios.findOne({ _id, }).lean();
    return (data && new UsuarioPersistencia(data));
  }
}