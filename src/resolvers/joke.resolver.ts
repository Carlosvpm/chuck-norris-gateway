import { Joke } from 'src/models/joke.model';
import { Get} from "@nestjs/common";
import { Resolver, Query } from "@nestjs/graphql";
import { JokesService } from "src/services/jokes.service";

@Resolver('api/jokes')
export class JokeResolver{

    constructor(private service: JokesService){}


    @Query(()=>[Joke])
    async getRandomJokeForCategory(category: string): Promise<Joke> {
      return await this.service.getRandomJokeForCategory(category);
    }
  
  
 
}