
import { IsEmpty, IsNotEmpty, MinLength } from "class-validator";

export class CreateUsuarioDto {
    @IsNotEmpty()
    _id: number;

    @IsNotEmpty()
    @MinLength(3)
    cedula: string;

    @IsNotEmpty()
    @MinLength(8)
    nombres: string;

    @IsNotEmpty()
    @MinLength(8)
    apellidos: string;

    @IsNotEmpty()
    telefono: number;

    @IsEmpty()
    horas: number;

    @IsEmpty()
    valorHora: number;

    @IsEmpty()
    fechaRegistro: Date;
}
