import { Joke } from 'src/models/joke';
import { Resolver, Query, Args } from '@nestjs/graphql';
import { JokesService } from 'src/services/jokes.service';
import { FreeText } from 'src/models/freeText';

@Resolver()
export class JokeResolver {
  constructor(private service: JokesService) {}

  @Query(() => Joke)
  async randomJoke(): Promise<Joke> {
    return await this.service.getRandomJoke();
  }

  @Query(() => Joke)
  async randomJokeForCategory(
    @Args('category', { type: () => String }) category: string,
  ): Promise<Joke> {
    return await this.service.getRandomJokeForCategory(category);
  }

  @Query(() => [String])
  async categories(): Promise<string[]> {
    return await this.service.getCategories();
  }

  @Query(() => FreeText)
  async freeText(
    @Args('text') text: string,
  ): Promise<FreeText[]> {
    return await this.service.getFreeText(text);
  }
}
