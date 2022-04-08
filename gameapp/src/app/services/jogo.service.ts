import { Injectable } from '@angular/core';
import { Jogo } from '../model/jogo';

@Injectable({
  providedIn: 'root'
})
export class JogoService {

  private jogos = new Array<Jogo>();
  private id = 1;

  constructor() { }

  inserir(jogo: Jogo) {
    jogo.id = this.id;
    this.jogos.push(jogo);
    this.id++;
    this.salvar()
  }

  listar(){
    this.carregar()
    return this.jogos;
  }

  remover(id?: number) {
    this.jogos = this.jogos.filter((jogo) => {
      return id !== jogo.id;
    });

    /*for(let i =0; i<this.jogos.length; i++) {
      if(this.jogos[i].id == id){
        this.jogos.splice(i, 1);
        break;
      }
    }*/
    this.salvar()
  }

  editar(jogoA:Jogo){
    const indice = this.jogos.findIndex((jogo) => {
      return jogoA.id === jogo.id;
    })
    if(indice >= 0)
      this.jogos[indice] = jogoA;
    this.salvar()
  }

  salvar(){
    localStorage.setItem('idGerado', this.id.toString());
    localStorage.setItem('jogos',  JSON.stringify(this.jogos));
  }

  carregar(){
    const idGerado = localStorage.getItem('idGerado');
    if(idGerado){
      this.id = Number(idGerado);
    }

    const jogosSalvos = localStorage.getItem('jogos')
    if(jogosSalvos){
      this.jogos = JSON.parse(jogosSalvos);
    }
  }
}
