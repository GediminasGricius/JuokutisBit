import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Joke } from '../models/joke';

@Injectable({
  providedIn: 'root'
})
export class JokeService {
  private categories:string[]=[
    "Programming",
    "Misc",
    "Dark",
    "Pun",
    "Spooky",
    "Christmas"
  ];

  constructor(private http:HttpClient) { }

  public getJoke(category:string,jokeType:string){
     return this.http.get<Joke>("https://v2.jokeapi.dev/joke/"+category,{
       params:{
         type:jokeType
       }
     });
  }

  public getCategories(){
    return this.categories;
  }

}
