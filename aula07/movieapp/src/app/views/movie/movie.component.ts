import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movies = Array<Movie>();
  curMovie?:Movie;

  constructor() { 
    const matrix = new Movie('Matrix', 4);
    this.movies.push(matrix);

    const batman = new Movie('The Batman', 5);
    this.movies.push(batman);
  }

  ngOnInit(): void {
  }
  selectMovie(movie:Movie){
    this.curMovie = movie;
  }

  newMovie(){
    this.curMovie = new Movie('', 0)
  }

  saveMovie(){
    if(this.curMovie)
      this.movies.push(this.curMovie);
      this.curMovie = undefined;
  }

  cancelMovie(){
    this.curMovie = undefined;
  }

  removeMovie(pos:number){
    this.movies.splice(pos, 1);
  }
}
