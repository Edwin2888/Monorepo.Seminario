import { Schema } from 'mongoose';
import { ModelDefinition } from '@nestjs/mongoose';
import { UsuarioPersistencia } from '../modelos/usuario';

export const UsuarioSchema = new Schema<UsuarioPersistencia>({
    cedula: {
        type: String,
        required: true,
    },
    nombres: {
        type: String,
        required: true,
    },
    apellidos: {
        type: String,
        required: true,
    },
    telefono: {
        type: Number,
        required: true,
    },
    horas: {
        type: Number,
        required: false,
    },
    valorHora: {
        type: Number,
        required: false,
    },
    fechaRegistro: {
        type: Date,
        required: false,
    },
});

export const USUARIOS_MODEL_NAME = 'Usuarios';

export const USUARIOS_MODEL_DEFINITION: ModelDefinition = {
  name: USUARIOS_MODEL_NAME,
  schema: UsuarioSchema,
};