import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { AuthService } from "../../../services/auth.service";
import { element } from 'protractor';
import { FormularioCitaService} from '../../../services/formulario-cita.service'
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { ToastrService } from 'ngx-toastr';
import { CitaService } from '../../../services/cita.service';
import { ClienteService } from '../../../services/cliente.service';
import { Cliente } from '../../../interfaces/cliente';
import {Router, ActivatedRoute } from '@angular/router';
import {Cita}  from '../../../interfaces/cita';
import { Registro_Empleados} from '../../../interfaces/registro-empleados';

@Component({
  selector: 'app-empleado-citas',
  templateUrl: './empleado-citas.component.html',
  styleUrls: ['./empleado-citas.component.css']
})
export class EmpleadoCitasComponent implements OnInit {
  API_ENDPOINT = 'http://localhost:8000/api';
  lista_cita: Cita[];
  cliente:any;
  lista_empleados: Registro_Empleados[];
  cita_empleados= [];
  constructor( private citaService: CitaService,
    private httpClient: HttpClient,
    public authService: AuthService,
    private toastr: ToastrService,
    private clienteService: ClienteService) {
      let id = 0;
      
      
      this.httpClient.get( this.API_ENDPOINT+'/petya-empleados').subscribe(
      ( data:Registro_Empleados[]) => {
        this.lista_empleados = data ; 
        let empleados = this.authService.userData;
       this.lista_empleados.forEach(element => {
         if(element.correo==empleados.email){
          id = element.id;
         }
       })      
       this.httpClient.get( this.API_ENDPOINT+'/petya-citas').subscribe(
         (datos: Cita[]) =>
        {
          this.lista_cita = datos;
          this.lista_cita.forEach((element) => {
            if((element.id_empleado == id) && (element.estado=="P")){
              this.cita_empleados.push(element) ;
              console.log(this.cita_empleados)
            }
          });
        })
      },(error)=>{
        this.toastr.error("Ha ocurrido un error!");
        console.log(error);
      })
  
   }

  ngOnInit(): void {
  }

}
