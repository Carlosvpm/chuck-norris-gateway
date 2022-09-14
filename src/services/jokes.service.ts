import { FreeText } from 'src/models/freeText';
import { environment } from 'src/environments/environments';
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';
import { Joke } from 'src/models/joke';

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
      this.http.get(`${environment.apiUrl}/search`, { params: { text } }),
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
