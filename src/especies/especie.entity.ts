import {
    Entity,
    PrimaryGeneratedColumn,
    Column
} from 'typeorm';

@Entity('especies')
export class Especie {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ length: 100 })
    nomePopular!: string;
    
    @Column({ length: 150 })
    nomeCientifico!: string;

    @Column({ length: 250 })
    descricao!: string;

    @Column({ default: true })
    domestico!: boolean

    @Column({ default: true })
    ativo!: boolean;
}