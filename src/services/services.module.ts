import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { JokesService } from './jokes.service';

@Module({
  imports: [HttpModule],
  providers: [JokesService],
  exports: [JokesService],
})
export class ServicesModule {}
