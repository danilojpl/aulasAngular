import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex-paises',
  templateUrl: './ex-paises.component.html',
  styleUrls: ['./ex-paises.component.css']
})
export class ExPaisesComponent implements OnInit {

  paises= ["Brasil","Portugal","Alemanha"]

  constructor() { }

  ngOnInit(): void {
  }

  alerta(pais:string){
    return alert(pais)
  }

}
