import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Joke } from '../models/joke';

@Injectable({
  providedIn: 'root'
})
export class JokeService {

  constructor(private http:HttpClient) { }

  public getJoke(){
     return this.http.get<Joke>("https://v2.jokeapi.dev/joke/Programming?type=single");
  }
}
