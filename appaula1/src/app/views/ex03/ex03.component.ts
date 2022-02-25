import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex03',
  templateUrl: './ex03.component.html',
  styleUrls: ['./ex03.component.css']
})
export class Ex03Component implements OnInit {

  petroleo = 'petroleo'

  constructor() { }

  ngOnInit(): void {
  }

  upper(msg:string):string{
    return msg.toUpperCase();
  }


}
