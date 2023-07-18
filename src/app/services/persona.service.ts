import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClienteInterface } from './cliente.interface';
import { EmpleadoInterface } from './empleado.interface';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  url='http://localhost:8080/v1/persona' 

  constructor(private readonly httpClient: HttpClient) { 
    
  }

  getClientebyCodigo(codigo: string){
    return this.httpClient.get<ClienteInterface>(this.url + '/cliente/info/' + codigo )
  }

  getEmpleadoByCodigo(codigo: string){
    return this.httpClient.get<EmpleadoInterface>(this.url + '/empleado/info/' + codigo )
  }
}
