import { 
    BaseEntity,
    Column,
    CreateDateColumn,
    PrimaryGeneratedColumn
} from "typeorm";

export class Usuario extends BaseEntity {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ type: 'varchar', length: 50 })
    cedula: string;

    @Column({ type: 'varchar', length: 150 })
    nombres: string;

    @Column({ type: 'varchar', length: 150 })
    apellidos: string;

    @Column({ type: 'bigint' })
    telefono: number;

    @Column({ type: 'int' })
    horas: number;

    @Column({ type: 'int' })
    valorHora: number;

    @CreateDateColumn({ type: 'timestamp', name: 'fecha_registro' })
    createdAt: Date;
}
