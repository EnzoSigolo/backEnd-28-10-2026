import {
    Entity,
    PrimaryGeneratedColumn,
    Column
} from 'typeorm';

@Entity('racas')
export class Raca {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ length: 100 })
    nome!: string;

    @Column({ length: 50 })
    porte!: string;

    @Column({ length: 250 })
    descricao!: string;

    @Column({ type: 'int' })
    expectativaVida!: number;

    @Column({ default: true })
    ativo!: boolean;
}