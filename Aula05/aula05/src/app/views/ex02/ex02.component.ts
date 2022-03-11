import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex02',
  templateUrl: './ex02.component.html',
  styleUrls: ['./ex02.component.css']
})
export class Ex02Component implements OnInit {

  numero1=0;
  numero2=0;
  result = 0;

  constructor() { }

  ngOnInit(): void {
  }

  soma(){
    this.result = this.numero1+this.numero2
  }

  sub(){
    this.result = this.numero1-this.numero2
  }

  mult(){
    this.result = this.numero1*this.numero2
  }

  div(){
    this.result = this.numero1/this.numero2
  }

}


