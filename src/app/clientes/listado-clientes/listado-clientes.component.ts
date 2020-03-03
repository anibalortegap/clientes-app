import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
import { Group } from '../group'
import { ClientsService } from '../clients.service';

@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrls: ['./listado-clientes.component.css']
})
export class ListadoClientesComponent implements OnInit {

  clientes: Client[];

  constructor(private clientesServices: ClientsService) { }

  ngOnInit() {
    this.clientes = this.clientesServices.getClient();
  }

}
