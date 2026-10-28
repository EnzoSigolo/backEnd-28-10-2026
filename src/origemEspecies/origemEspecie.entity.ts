import {
    Entity,
    PrimaryGeneratedColumn,
    Column
} from 'typeorm';

@Entity('origemEspecies')
export class origemEspecie {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ length: 100 })
    continente!: string;

    @Column({ length: 100 })
    pais!: string;

    @Column({ length: 100 })
    regiao!: string;

    @Column({ length: 250 })
    descricao!: string;

    @Column({ default: true })
    ativo!: boolean;
}