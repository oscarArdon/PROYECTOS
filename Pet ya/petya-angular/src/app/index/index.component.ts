import { Component, OnInit } from '@angular/core';
import { AuthService } from "../services/auth.service";
import { Cliente } from "../interfaces/cliente";
import { ClienteService } from "../services/cliente.service";
import { ToastrService } from 'ngx-toastr';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  allclient = null;
  API_ENDPOINT = 'http://localhost:8000/api';
  correo: AuthService[];
  id_empleado=0;
 lista_horarios=null;
 horarios_user;
 lista_clientes: Cliente[];
 horario_empleados= [];
 id =0;
  constructor(public authService: AuthService,public httpClient: HttpClient, private clienteServices: ClienteService, private toastr: ToastrService
  ) {
    
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
   // this.seleccionarTodo();
  }

  registro: Cliente = {
    nombre: null,
    correo: null,
    telefono: null,
    contra: null,
  }



  guardarcliente() {


    this.clienteServices.guardar(this.registro).subscribe((data) => {
      this.toastr.success("Registro exitosamente");

    }, (error) => {
      this.toastr.error("Ha ocurrido un error!");
      console.log(error);
    });

    this.authService.SignUp(this.registro.correo, this.registro.contra);


  }


  /*seleccionarTodo() {
   // servicio para select * from clientes
    this.clienteServices.select().subscribe((data: Cliente[]) => {
      //asignando el registros al arreglo 'clientes'
      this.allclient = data;
      if (this.authService.userData.email != null) {
        for (let i = 0; i < this.allclient.length; i++) {
          if (this.authService.userData.email == this.allclient[i].correo) {
            console.log(this.allclient[i]);
            this.id = this.allclient[i].id;
            break;
          }
        }
        console.log(this.id);
      } else {
      }
    }, (error) => {
      this.toastr.error("Ha ocurrido un error!");
      console.log(error);
    });
  } */




}
