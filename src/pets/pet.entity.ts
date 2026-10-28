import {
    Entity,
    PrimaryGeneratedColumn,
    Column
} from 'typeorm';

@Entity('pets')
export class Pet {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ length: 100, nullable: true })
    nome!: string;

    @Column({ type: 'date' })
    dataNascimento!: Date;

    @Column({ length: 50 })
    sexo!: string;

    @Column({ type: 'int' })
    peso!: number;

    @Column({ length: 50 })
    cor!: string;

    @Column({ default: false })
    castrado!: boolean;

    @Column({ default: true })
    ativo!: boolean;
}