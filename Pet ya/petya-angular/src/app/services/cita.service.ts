import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders}  from'@angular/common/http';
import {Cita} from 'src/app/interfaces/cita'
@Injectable({
  providedIn: 'root'
})
export class CitaService {
  API_ENDPOINT = 'http://localhost:8000/api';
  constructor(private httpClient: HttpClient) { }
  select(){ 
    return this.httpClient.get(this.API_ENDPOINT+"/petya-citas");
  }

  put(cita){
    const headerrs = new HttpHeaders({'Content-Type':'application/json'});
    
    return this.httpClient.put(this.API_ENDPOINT+'/petya-citas/'+ cita.id, cita, {headers:headerrs});
   }

   savecita(objecita: Cita){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.post( this.API_ENDPOINT + '/petya-citas', objecita,{headers: headers});
}
  delete(id){ 
    return this.httpClient.delete(this.API_ENDPOINT+"/petya-citas/" + id);
  }
}
