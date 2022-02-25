import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent implements OnInit {

  nome = 'Danilo Duarte';
  aula = 'Aula: 02'

  constructor() { }

  ngOnInit(): void {
  }

}
