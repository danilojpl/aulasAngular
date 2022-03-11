import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex-ngfor',
  templateUrl: './ex-ngfor.component.html',
  styleUrls: ['./ex-ngfor.component.css']
})
export class ExNgforComponent implements OnInit {

  images=["assets/husky.jpg","assets/pinscher.jpg","assets/pitbull.jpg"]

  constructor() { }

  ngOnInit(): void {
  }

}
