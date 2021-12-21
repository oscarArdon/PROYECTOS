import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders}  from'@angular/common/http';
import {Horario} from '../interfaces/horario'
@Injectable({
  providedIn: 'root'
})
export class HorarioService {
  API_ENDPOINT = 'http://localhost:8000/api';
  constructor(public httpClient: HttpClient) {
    
   
  }
  selectHorarios(){ 
    return this.httpClient.get(this.API_ENDPOINT+"/petya-horarios");
  }
  insert(empleado: Horario){
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    
    return this.httpClient.post(this.API_ENDPOINT+'/petya-horarios', empleado, {headers:headers});
   }
   select(){ 
     return this.httpClient.get(this.API_ENDPOINT+"/petya-horarios");
   }
   put(horario){
     const headerrs = new HttpHeaders({'Content-Type':'application/json'});
     
     return this.httpClient.put(this.API_ENDPOINT+'/petya-horarios/'+ horario.id, horario, {headers:headerrs});
    }
    delete(id){ 
     return this.httpClient.delete(this.API_ENDPOINT+"/petya-horarios/" + id);
   }
   selectIds(){ 
    return this.httpClient.get(this.API_ENDPOINT+"/petya-horarios");
  }
}
