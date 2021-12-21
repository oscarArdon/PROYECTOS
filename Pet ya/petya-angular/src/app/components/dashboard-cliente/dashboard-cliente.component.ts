import { Component, OnInit } from '@angular/core';
//Service
import { Cliente } from "../../interfaces/cliente";
import { ClienteService } from "../../services/cliente.service";
import { AuthService } from "../../services/auth.service";
import { HttpClient, HttpResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-dashboard-cliente',
  templateUrl: './dashboard-cliente.component.html',
  styleUrls: ['./dashboard-cliente.component.css']
})

export class DashboardClienteComponent implements OnInit {
id =0;
API_ENDPOINT = 'http://localhost:8000/api';
lista_clientes: Cliente[];
  constructor(public authService: AuthService, public httpClient: HttpClient, public toastr:ToastrService) { 
    this.httpClient.get( this.API_ENDPOINT+'/petya-clientes').subscribe(
      ( data:Cliente[]) => {
        this.lista_clientes = data ; 
        let empleados = this.authService.userData;
       this.lista_clientes.forEach(element => {
         if(element.correo==empleados.email){
          this.id = 1;
         }
       })      
      },(error)=>{
        this.toastr.error("Ha ocurrido un error!");
        console.log(error);
      })
  }

  ngOnInit(): void {
  }

}
