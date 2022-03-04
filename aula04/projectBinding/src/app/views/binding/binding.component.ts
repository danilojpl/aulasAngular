import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  nome = "";
  valor1 = 0;
  valor2 = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
