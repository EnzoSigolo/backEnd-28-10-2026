import {
    Entity,
    PrimaryGeneratedColumn,
    Column
} from 'typeorm';

@Entity('tutores')
export class Tutor {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ length: 100, nullable: true })
    nome!: string;

    @Column({ type: 'int', unique: true })
    cpf!: number;

    @Column({ length: 100 })
    email!: string;

    @Column({ type: 'int' })
    telefone!: number;

    @Column({ length: 200 })
    endereco!: string;

    @Column({ default: true })
    ativo!: boolean;
}