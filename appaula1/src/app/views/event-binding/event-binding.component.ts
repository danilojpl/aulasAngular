import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {
  
  texto = '';
  styleclass = 'classA'

  constructor() { }

  ngOnInit(): void {
  }

  mudarTexto(){
    this.texto = 'Olá, Mundo!';
  }

  mudarClasse(){
    if (this.styleclass == 'classA'){
      this.styleclass = 'classB'
    }else{
      this.styleclass = 'classA'
    }
  }

}
