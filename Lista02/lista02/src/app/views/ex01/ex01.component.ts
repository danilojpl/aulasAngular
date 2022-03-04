import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex01',
  templateUrl: './ex01.component.html',
  styleUrls: ['./ex01.component.css']
})
export class Ex01Component implements OnInit {

  msg = '';

  constructor() { }

  ngOnInit(): void {
  }

  alerta(){
    alert(this.msg) 
  }

}
