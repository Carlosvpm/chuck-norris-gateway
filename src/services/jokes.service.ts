import { FreeText } from '../models/FreeText.model';
import { environment } from '../environments/environments';
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

import { lastValueFrom } from 'rxjs';
import { Joke } from 'src/models/Joke.model';

@Injectable()
export class JokesService {
  constructor(private http: HttpService) {}

  async getRandomJoke(): Promise<Joke> {
    const response = await lastValueFrom(
      this.http.get(`${environment.apiUrl}/random`),
    );
    return response.data;
  }

  async getRandomJokeForCategory(category: string): Promise<Joke> {
    const response = await lastValueFrom(
      this.http.get(`${environment.apiUrl}/random?category=${category}`),
    );
    return response.data;
  }

  async getFreeText(text: string): Promise<FreeText[]> {
    const response = await lastValueFrom(
      this.http.get(`${environment.apiUrl}/search?query=${text}`),
    );
    return response.data;
  }

  async getCategories(): Promise<string[]> {
    const response = await lastValueFrom(
      this.http.get(`${environment.apiUrl}/categories`),
    );
    return response.data;
  }
}
