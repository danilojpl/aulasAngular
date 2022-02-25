import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex04',
  templateUrl: './ex04.component.html',
  styleUrls: ['./ex04.component.css']
})
export class Ex04Component implements OnInit {

  img1 = 'assets/img01.jpg';
  img2 = 'assets/img02.jpg';
  img3 = 'assets/img03.png';

  constructor() { }

  ngOnInit(): void {
  }

}
