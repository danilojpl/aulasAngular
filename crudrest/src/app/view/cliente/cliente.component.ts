import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/model/client';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  clientes = new Array<Cliente>();
  cliente?:Cliente;
  constructor(private clienteService:ClienteService) { }

  ngOnInit(): void {
    this.listar();
  }

  listar(){
    this.clienteService.listar().subscribe(clientes => {
      this.clientes = clientes;
    });
  }

  novo(){
    this.cliente = new Cliente();

  }

  salvar(){
    if(this.cliente) {
      this.clienteService.inserir(this.cliente).subscribe(cliente =>{
        this.listar();
        this.cliente = undefined;
      })
    }
  }

}
