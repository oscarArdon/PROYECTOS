import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Diagnostico} from '../interfaces/diagnostico'
import { Router } from '@angular/router'
@Injectable({
  providedIn: 'root'
})
export class DiagnosticoService {
  API_ENDPOINT = 'http://localhost:8000/api';
  constructor(public router:Router ,private httpClient: HttpClient) { }
  insert(diagnostico){
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    
    return this.httpClient.post(this.API_ENDPOINT+'/petya-diagnosticos', diagnostico, {headers:headers});
   }

   select(){
    return this.httpClient.get(this.API_ENDPOINT+'/petya-diagnosticos');
   }

   delete(id){ 
    return this.httpClient.delete(this.API_ENDPOINT+"/petya-diagnosticos/" + id);
  }
}
