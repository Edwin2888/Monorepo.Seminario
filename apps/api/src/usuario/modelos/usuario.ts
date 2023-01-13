import { HttpException } from "@nestjs/common";

interface UsuarioPersistenciaProps {
    _id: string;
    cedula: string;
    nombres: string;
    apellidos: string;
    telefono: number;
    horas: number;
    valorHora: number;
    fechaRegistro: Date;
}

export class UsuarioPersistencia 
    implements UsuarioPersistenciaProps
{
    static readonly CEDULA_REQUERIDO = 'La cedula es requerida';
    static readonly NOMBRE_REQUERIDO = 'El nombre es requerido';
    static readonly APELLIDO_REQUERIDO = 'El apellido es requerido';
    static readonly TELEFONO_REQUERIDO = 'El telefono es requerido';

    readonly _id: string;
    readonly cedula: string;
    readonly nombres: string;
    readonly apellidos: string;
    readonly telefono: number;
    readonly horas: number;
    readonly valorHora: number;
    readonly fechaRegistro: Date;

    constructor(data: Partial<UsuarioPersistenciaProps>){
        if(!data.cedula){
            throw new HttpException(UsuarioPersistencia.CEDULA_REQUERIDO,400);
        }

        if(!data.nombres){
            throw new HttpException(UsuarioPersistencia.NOMBRE_REQUERIDO,400);
        }

        if(!data.apellidos){
            throw new HttpException(UsuarioPersistencia.APELLIDO_REQUERIDO,400);
        }

        if(!data.telefono){
            throw new HttpException(UsuarioPersistencia.TELEFONO_REQUERIDO,400);
        }

        this._id = data._id;
        this.cedula = data.cedula;
        this.nombres = data.nombres;
        this.apellidos = data.apellidos;
        this.telefono = data.telefono;
        this.horas = data.horas;
        this.valorHora = data.valorHora;
        this.fechaRegistro = data.fechaRegistro;
    }

}