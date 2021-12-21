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
@Component({
  selector: 'app-listar-citas',
  templateUrl: './listar-citas.component.html',
  styleUrls: ['./listar-citas.component.css']
})
export class ListarCitasComponent implements OnInit {
  API_ENDPOINT = 'http://localhost:8000/api';
  lista_cita: Cita[];
  
  cliente:any;
  
  constructor(  private citaService: CitaService,
   private httpClient: HttpClient,
   public authService: AuthService,
   private toastr: ToastrService,
   private clienteService: ClienteService
    ) {     
      this.httpClient.get( this.API_ENDPOINT+'/petya-citas').subscribe( 
        (data: Cita[]) =>{ 
          
    this.lista_cita = data;
    let idcli = data;
    console.log(this.lista_cita);
 
    });
    

    }

  ngOnInit(): void {
  }
  delete(id){
    if(confirm('Esta seguro de eliminar esta cita?')){
      this.citaService.delete(id).subscribe(data =>
        {
         this.toastr.success('Perfecto!', 'Cita eliminada.');
        }, error =>{
         this.toastr.error('Hey!', 'No se pudo eliminar el registro.');
        })
    }
   
  }
}
