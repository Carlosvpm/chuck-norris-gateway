import { Field, ObjectType } from '@nestjs/graphql';


@ObjectType({ description: 'Joke ' })
export class Joke {
  @Field((type) => [String])
  categories: string[];

  @Field((type) => String)
  created_at: string;

  @Field((type) => String)
  icon_url: string;

  @Field((type) => String)
  id: string;

  @Field((type) => String)
  updated_at: string;

  @Field((type) => String)
  url: string;

  @Field((type) => String)
  value: string;
}
