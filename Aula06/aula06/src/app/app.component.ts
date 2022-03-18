import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aula06';
  ex = '';

  exercicios (exercicio:string){
    this.ex = exercicio
  }
  
}



