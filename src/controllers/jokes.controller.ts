import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiHeader, ApiTags } from '@nestjs/swagger';
import { JokesService } from 'src/services/jokes.service';

@ApiTags('Jokes')
@ApiHeader({
  name: 'Jokes',
  description: 'Endpoints que permitem a busca por piadas do chuck',
})
@Controller('api/jokes')
export class JokesController {
  constructor(private jokesService: JokesService) {}


  @Get('random')
  async getRandomJokeForCategory(@Query('category') category: string) {
    return await this.jokesService.getRandomJokeForCategory(category);
  }


  @Get('search')
  async getTest(@Query('query') text: string) {
    return await this.jokesService.getFreeText(text);
  }
}
