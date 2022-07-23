import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { JokesService } from 'src/services/jokes.service';

@ApiTags('Jokes')
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
