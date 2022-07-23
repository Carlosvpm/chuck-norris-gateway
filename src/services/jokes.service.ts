import { environment } from './../enviroments/environments';
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Joke } from 'src/models/joke';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class JokesService {
  constructor(private http: HttpService) {}


  async getRandomJokeForCategory(category: string): Promise<Joke> {
    const response = await lastValueFrom(
      this.http.get(`${environment.apiUrl}/random?category=${category}`),
    );
    return response.data;
  }

  async getFreeText(text: string): Promise<Joke> {
    const response = await lastValueFrom(
      this.http.get(`${environment.apiUrl}/search?query=${text}`),
    );
    return response.data;
  }
}
