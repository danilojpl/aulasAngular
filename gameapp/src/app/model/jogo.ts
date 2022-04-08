export class Jogo{
    id?: number;
    nome:string;
    genero:string;
    plataforma:string;
    status = 'Na';

    constructor(nome = '', genero= '', plataforma= '',  status = ''){
        this.nome = nome;
        this.genero = genero;
        this.plataforma = plataforma;
        this.status = status;
    }
}
