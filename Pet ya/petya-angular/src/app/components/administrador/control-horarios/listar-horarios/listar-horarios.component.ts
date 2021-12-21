import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { Identifiers } from '@angular/compiler';
import { Horario } from '../../../../interfaces/horario'
import { HorarioService} from '../../../../services/horario.service'
import { EmailValidator } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService} from '../../../../services/auth.service'
@Component({
  selector: 'app-listar-horarios',
  templateUrl: './listar-horarios.component.html',
  styleUrls: ['./listar-horarios.component.css']
})
export class ListarHorariosComponent implements OnInit {
  API_ENDPOINT = 'http://localhost:8000/api';
  lista_horarios: Horario[];
  constructor(
    private horarioService: HorarioService,
   private httpClient: HttpClient,
   public authService: AuthService,
   private toastr: ToastrService
  ) { 

    
    this.httpClient.get( this.API_ENDPOINT+'/petya-horarios').subscribe( 
      (data: Horario[]) =>{ 
  this.lista_horarios = data;
  console.log(this.lista_horarios);
  });
  }

  ngOnInit(): void {
  }
  delete(id){
    if(confirm('Esta seguro de eliminar este horario?')){
      this.horarioService.delete(id).subscribe(data =>
        {
         this.toastr.success('Perfecto!', 'Horario eliminado.');
        }, error =>{
         this.toastr.error('Hey!', 'No se pudo eliminar el registro.');
        })
    }
   
  }
}
