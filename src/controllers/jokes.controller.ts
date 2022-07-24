import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiHeader, ApiTags } from '@nestjs/swagger';
import { JokesService } from 'src/services/jokes.service';

@ApiTags('Jokes')
@Controller('api/jokes')
export class JokesController {
  constructor(private jokesService: JokesService) {}

  @Get('categories')
  async getCategory() {
    return await this.jokesService.getCategories();
  }
}
