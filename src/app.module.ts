import { ResolversModule } from './resolvers/resolvers.module';
import { ServicesModule } from './services/services.module';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { Joke } from './models/joke.model';

@Module({
  imports: [
    ResolversModule,
    ServicesModule,
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/graphql/schema.gql'),
    }),
  ],
})
export class AppModule {}
