export class game{
    jogo?:string;
    desenvolvedor?:string;
    plataforma?:string;
    num_jogadores?:number;


    constructor(jogo: string, desenvolvedor:string, plataforma:string, num_jogadores:number){
        this.jogo = jogo;
        this.desenvolvedor = desenvolvedor
        this.plataforma = plataforma
        this.num_jogadores = num_jogadores;
    }
}