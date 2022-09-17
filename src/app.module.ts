import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { join } from 'path';
import { ServicesModule } from './services/services.module';
import { ResolversModule } from './resolvers/resolvers.module';

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
