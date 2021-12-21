import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders}  from'@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FormularioCitaService {
  API_ENDPOINT = 'http://localhost:8000/api';
  constructor(private httpClient: HttpClient) { }
 
   select(){ 
     return this.httpClient.get(this.API_ENDPOINT+"/petya-formcita");
   }
 
  put(formulariocita){
    const headerrs = new HttpHeaders({'Content-Type':'application/json'});
    
    return this.httpClient.put(this.API_ENDPOINT+'/petya-formcita/'+ formulariocita.id, formulariocita, {headers:headerrs});
   }

}
