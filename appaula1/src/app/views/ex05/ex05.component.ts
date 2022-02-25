import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex05',
  templateUrl: './ex05.component.html',
  styleUrls: ['./ex05.component.css']
})
export class Ex05Component implements OnInit {

  img = "assets/img01.jpg"

  constructor() { }

  ngOnInit(): void {
  }

  mudarImagem(){
    if (this.img == 'assets/img01.jpg'){
      this.img = 'assets/img02.jpg'
    }
    else{
      this.img = 'assets/img01.jpg'
    }
  }

}
