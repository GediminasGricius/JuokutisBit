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
  public loading=true;
  public error=false;
  public categories:string[]=[];
  public category:string="";
  public type:string="";

  constructor( private jokeService:JokeService) { }

  private loadJoke(){
    this.loading=true;
    this.jokeService.getJoke(this.category, this.type  ).subscribe({
      next:(result)=>{
        this.joke=result;
        this.loading=false;
      },
      error:(error)=>{
        console.log(error.status);
        this.error=true; 
      }
    });
  }

  ngOnInit(): void {
    this.categories=this.jokeService.getCategories();
  }

  public nextJoke(){
    this.loadJoke();
  }

}
