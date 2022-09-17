import { Field, ObjectType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';

@ObjectType({ description: 'Joke' })
export class Joke {
  @Field(() => [String])
  categories: string[];

  @ApiProperty()
  @Field(() => String)
  created_at: string;

  @Field(() => String)
  icon_url: string;

  @Field(() => String)
  id: string;

  @Field(() => String)
  updated_at: string;

  @Field(() => String)
  url: string;

  @Field(() => String)
  value: string;
}
