import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Registro_Empleados} from '../interfaces/registro-empleados'
import { Router } from '@angular/router'
@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  API_ENDPOINT = 'http://localhost:8000/api';
  constructor(public router:Router ,private httpClient: HttpClient) {
   
   }
   insert(empleado: Registro_Empleados){
     const headers = new HttpHeaders({'Content-Type':'application/json'});
     
     return this.httpClient.post(this.API_ENDPOINT+'/petya-empleados', empleado, {headers:headers});
    }

   
    select(){ 
      return this.httpClient.get(this.API_ENDPOINT+"/petya-empleados");
    }
  
    put(empleado){
      const headerrs = new HttpHeaders({'Content-Type':'application/json'});
      
      return this.httpClient.put(this.API_ENDPOINT+'/petya-empleados/'+ empleado.id, empleado, {headers:headerrs});
     }

     delete(id){ 
      return this.httpClient.delete(this.API_ENDPOINT+"/petya-empleados/" + id);
    }
}
