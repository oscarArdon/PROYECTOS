import { Component, OnInit } from '@angular/core';
import {FrmcitaService} from '../../../services/frmcita.service';
import {HttpClient, HttpClientModule,HttpHeaders} from '@angular/common/http';
import {FrmCita} from '../../../interfaces/frmcita';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from "../../../services/auth.service";
import {Registro_Empleados} from '../../../interfaces/registro-empleados'
import {EmpleadoService} from '../../../services/empleado.service';

@Component({
  selector: 'app-tabla-citas',
  templateUrl: './tabla-citas.component.html',
  styleUrls: ['./tabla-citas.component.css']
})
export class TablaCitasComponent implements OnInit {
  citas: FrmCita[];
  empleados: Registro_Empleados[];
  API_ENDPOINT = 'http://localhost:8000/api';
  constructor(private frcitaservice: FrmcitaService, private httpClient: HttpClientModule, private httpClient2: HttpClient, public toastr: ToastrService, public authService: AuthService) { 
    //Arranca el metodo  de obtner los datos de citas
    this.frcitaservice.get().subscribe((data: FrmCita[]) =>{
      this.citas = data;
      this.citas = this.citas.filter(cit => cit.cliente_id.toString() == localStorage.getItem("user"));   
      console.log(data);
    }, error => {
      console.log(error);
      this.toastr.error("Error al mostrar tabla!");      
    });
    
    this.httpClient2.get( this.API_ENDPOINT+'/petya-empleados').subscribe( 
      (data: Registro_Empleados[]) =>{ 
  this.empleados = data;
  console.log(this.empleados);
  });
  }



  ngOnInit(): void {
  }

  
  comparacion(param):string{
    let nombre;
    this.empleados.forEach(element =>{
      if(element.id == param){
        nombre = element.nombres;
      }      
    });    
    return nombre;
  }

}
