import { JokeResolver } from './joke.resolver';
import { Module } from '@nestjs/common';
import { ServicesModule } from 'src/services/services.module';

@Module({
    imports: [ServicesModule],
    providers: [JokeResolver],
    exports: [JokeResolver]
})
export class ResolversModule {}
