import { Component, OnInit } from '@angular/core';
import { game } from 'src/app/model/game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  games = Array<game>();
  curGame?:game;

  constructor() { 
    const valorant = new game('Valorant', 'Riot Games', 'PC', 900000);
    this.games.push(valorant);
  }

  ngOnInit(): void {
  }

  saveGame(){
    if(this.curGame)
      this.games.push(this.curGame);
  }

  cancelGame(){
    this.curGame = undefined;
  }

  removeGame(i:number){
    this.games.splice(i,1);
  }

  newGame(){
    this.curGame = new game('', '','',0)
  }

}
