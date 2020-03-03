import { Group } from './group';

export interface Client {
    id: number;
    nombre: string;
    cif: string;
    direccion: string;
    grupo: Group[]
}
