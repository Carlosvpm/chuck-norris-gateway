import { Int } from '@nestjs/graphql';
import { Field, ObjectType } from '@nestjs/graphql';
import { Joke } from './joke';

@ObjectType({ description: 'Free Text' })
export class FreeText {
  @Field(() => Int)
  total: number;

  @Field(() => [Joke])
  result: Joke[];
}
