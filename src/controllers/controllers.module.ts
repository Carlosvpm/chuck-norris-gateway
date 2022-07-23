import { ServicesModule } from './../services/services.module';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { JokesController } from './jokes.controller';

@Module({
  imports: [ServicesModule],
  controllers: [JokesController],
})
export class ControllersModule {}
