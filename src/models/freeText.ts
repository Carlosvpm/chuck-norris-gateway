import { Int } from '@nestjs/graphql';
import { Field, ObjectType } from '@nestjs/graphql';
import { Joke } from './joke';

@ObjectType({ description: 'Free Text' })
export class FreeText {

  @Field((type) => Int)
  total: number;


  @Field((type) => [Joke])
  result: Joke[];
}
