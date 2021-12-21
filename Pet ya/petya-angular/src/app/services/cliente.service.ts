import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import {Cliente} from "../interfaces/cliente";
@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  API_ENDPOINT = 'http://localhost:8000/api';
  constructor(private httpClient:HttpClient) { }

  guardar(cliente:Cliente){
    const headers= new HttpHeaders({'Content-Type':'application/json'});
     return this.httpClient.post(this.API_ENDPOINT+'/petya-clientes',cliente, { headers: headers});
  }

select(){
  return this.httpClient.get(this.API_ENDPOINT+'/petya-clientes');
 }

put(cliente){
  const headers= new HttpHeaders({'Content-Type':'application/json'});
  return this.httpClient.put(this.API_ENDPOINT+'/petya-clientes/'+ cliente.id,cliente,{ headers: headers}    );
} 

}
