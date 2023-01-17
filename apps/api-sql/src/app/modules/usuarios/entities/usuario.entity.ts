import { 
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn
} from "typeorm";

@Entity()
export class Usuario extends BaseEntity {
    @PrimaryGeneratedColumn('increment')
    _id: number;

    @Column({ type: 'varchar', length: 50 })
    cedula: string;

    @Column({ type: 'varchar', length: 150 })
    nombres: string;

    @Column({ type: 'varchar', length: 150 })
    apellidos: string;

    @Column({ type: 'bigint' })
    telefono: number;

    @Column({ type: 'int', nullable: true })
    horas: number;

    @Column({ type: 'int', nullable: true })
    valorHora: number;

    @CreateDateColumn({ type: 'timestamp', name: 'fecha_registro', nullable: true })
    createdAt: Date;
}
