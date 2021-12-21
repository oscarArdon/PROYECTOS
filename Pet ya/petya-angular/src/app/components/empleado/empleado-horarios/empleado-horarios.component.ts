import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../../../services/empleado.service';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { AuthService } from "../../../services/auth.service";
import { Horario } from '../../../interfaces/horario';
import { element } from 'protractor';
import { Registro_Empleados} from '../../../interfaces/registro-empleados';
import { HorarioService} from '../../../services/horario.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-empleado-horarios',
  templateUrl: './empleado-horarios.component.html',
  styleUrls: ['./empleado-horarios.component.css']
})
export class EmpleadoHorariosComponent implements OnInit {
  API_ENDPOINT = 'http://localhost:8000/api';
  horarios: Horario[];
  correo: AuthService[];
  id_empleado=0;
 lista_horarios=null;
 horarios_user;
 lista_empleados: Registro_Empleados[];
 horario_empleados= [];
  constructor(private empleadoService: EmpleadoService,public toastr: ToastrService,
    public httpClient: HttpClient, public authService: AuthService,
    private horarioService: HorarioService) {
      //--------------------------------------------------
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
       this.httpClient.get( this.API_ENDPOINT+'/petya-horarios').subscribe(
         (datos: Horario[]) =>
        {
          this.lista_horarios = datos;
          this.lista_horarios.forEach((element) => {
            if(element.empleado_id == id){
              this.horario_empleados.push(element) ;
              console.log(this.horario_empleados)
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
