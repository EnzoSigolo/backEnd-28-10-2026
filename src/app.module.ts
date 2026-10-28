import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { origemEspecie } from './origemEspecies/origemEspecie.entity.js';
import { Especie } from './especies/especie.entity.js';
import { Pet } from './pets/pet.entity.js';
import { Raca } from './racas/raca.entity.js';
import { Tutor } from './tutores/tutor.entity.js';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '12345678',
      database: 'veterinario_db',
      entities: [origemEspecie, Especie, Pet, Raca, Tutor],
      synchronize: true,
      logging: true,
    }),
  ],
})
export class AppModule {}
