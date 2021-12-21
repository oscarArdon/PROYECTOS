import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { Identifiers } from '@angular/compiler';
import { Registro_Empleados } from '../../../interfaces/registro-empleados'
import { EmpleadoService} from '../../../services/empleado.service'
import { EmailValidator } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from "../../../services/auth.service";

@Component({ 
  selector: 'app-listar-empleados',
  templateUrl: './listar-empleados.component.html',
  styleUrls: ['./listar-empleados.component.css']
})
export class ListarEmpleadosComponent implements OnInit {
  API_ENDPOINT = 'http://localhost:8000/api';
  lista_empleados: Registro_Empleados[];
  constructor(  private empleadoService: EmpleadoService,
   private httpClient: HttpClient,
   public authService: AuthService,
   private toastr: ToastrService 
    ) {     
      this.httpClient.get( this.API_ENDPOINT+'/petya-empleados').subscribe( 
        (data: Registro_Empleados[]) =>{ 
    this.lista_empleados = data;
    console.log(this.lista_empleados);
    });
    

    }

  ngOnInit(): void {
   
  }
  delete(id){
    if(confirm('Esta seguro de eliminar este empleado?')){
      this.empleadoService.delete(id).subscribe(data =>
        {
         this.toastr.success('Perfecto!', 'Empleado eliminado.');
        }, error =>{
         this.toastr.error('Hey!', 'No se pudo eliminar el registro.');
        })
    }
   
  }
}
