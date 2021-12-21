import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FrmCita } from 'src/app/interfaces/frmcita';

@Injectable({
  providedIn: 'root'
})
export class FrmcitaService {
  API_ENDPOINT = 'http://127.0.0.1:8000/api';
  constructor(private httpClient: HttpClient) { }
  save(frcita: FrmCita){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.post( this.API_ENDPOINT + '/petya-formcita', frcita,{headers: headers});
  }

  get(){
    return this.httpClient.get(this.API_ENDPOINT + '/petya-formcita');
  }

  getEmpleados(){
    return this.httpClient.get(this.API_ENDPOINT + '/petya-empleados');
  }

  getClientes(){
    return this.httpClient.get(this.API_ENDPOINT + '/petya-clientes');    
  }
  getTabla(){
    return this.httpClient.get(this.API_ENDPOINT + '/petya-formcita/tabla');    
  }

}
