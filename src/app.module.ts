import { JokesService } from './services/jokes.service';
import { ServicesModule } from './services/services.module';
import { ControllersModule } from './controllers/controllers.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ServicesModule, ControllersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
