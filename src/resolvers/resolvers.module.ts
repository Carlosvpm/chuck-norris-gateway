import { ServicesModule } from './../services/services.module';
import { JokeResolver } from './joke.resolver';
import { Module } from '@nestjs/common';

@Module({
    imports: [ServicesModule],
    providers: [JokeResolver],
    exports: [JokeResolver]
})
export class ResolversModule {}
