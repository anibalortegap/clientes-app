import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../clients.service';
import { Client } from '../client';
import { Group } from '../group';
@Component({
  selector: 'app-alta-cliente',
  templateUrl: './alta-cliente.component.html',
  styleUrls: ['./alta-cliente.component.css']
})
export class AltaClienteComponent implements OnInit {

  cliente: Client;
  grupos: Group[]

  constructor(private clientesService: ClientsService) {

   }

  ngOnInit() {
    this.cliente = this.clientesService.newCLiente();
    this.grupos = this.clientesService.getGrupos();
  }

  nuevoCliente(): void {
    this.clientesService.addCliente(this.cliente);
    this.cliente = this.clientesService.newCLiente();
  }

}
