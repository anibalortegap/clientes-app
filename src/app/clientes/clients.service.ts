import { Client } from './client';
import { Group } from './group';


import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  private clientes: Client[];
  private grupos: Group[];

  constructor() {

    this.grupos = [
      {
        id: 0,
        nombre: 'Sin definir'
      },
      {
        id: 1,
        nombre: 'Activos'
      },
      {
        id: 2,
        nombre: 'Inactivos'
      },
      {
        id: 3,
        nombre: 'Deudores'
      }
    ];
    this.clientes = [];
   }

   getGrupos(){
     return this.grupos;
   }

   getClient(){
     return this.clientes;
   }

   addCliente(cliente: Client){
     this.clientes.push(cliente);
   }

   newCLiente(): Client {
     return {
       id: this.clientes.length,
       nombre: '',
       cif: '',
       direccion: '',
       grupo: []
     };
   }
}
