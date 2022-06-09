import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Joke } from 'src/app/models/joke';
import { JokeService } from 'src/app/services/joke.service';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {

  public joke:Joke|null=null;

  constructor( private jokeService:JokeService) { }

  private loadJoke(){
    this.jokeService.getJoke().subscribe((result)=>{
      this.joke=result;
    });
  }

  ngOnInit(): void {
    this.loadJoke();
  }

  public nextJoke(){
    this.loadJoke();
  }

}
