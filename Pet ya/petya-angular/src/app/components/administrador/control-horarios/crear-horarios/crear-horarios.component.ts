import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

//  Service 
import { HorarioService } from '../../../../services/horario.service';
import { EmpleadoService } from '../../../../services/empleado.service';
import {Router, ActivatedRoute } from '@angular/router'
// toastr
import { ToastrService } from 'ngx-toastr';
import { Horario } from 'src/app/interfaces/horario';
import { HttpClient } from '@angular/common/http';
import { AuthService} from '../../../../services/auth.service'
@Component({
  selector: 'app-crear-horarios',
  templateUrl: './crear-horarios.component.html',
  styleUrls: ['./crear-horarios.component.css']
})
export class CrearHorariosComponent implements OnInit {
  horario: Horario={
    dia: null,
    hora_inicio: null,
    hora_fin: null,
    empleado_id: null
    
  };
  id: any;
  editing: boolean=false;
  horarios: Horario[];
  ids:any;
  constructor(
    public toastr: ToastrService,
    private http: HttpClient,
    private horarioService: HorarioService,
    public router: Router,
    private activatedRoute: ActivatedRoute,
    private empleadoService: EmpleadoService,
    public authService: AuthService
  ) {

    this.id = this.activatedRoute.snapshot.params['id'];
    this.empleadoService.select().subscribe(data =>
    {
      this.ids= data;
      console.log(this.ids);
    });
    if(this.id){
      this.editing = true;
      this.horarioService.select().subscribe((data: Horario[]) =>{
    this.horarios=data;
    this.horario = this.horarios.find((m) =>{ return m.id == this.id})
    console.log(this.horario);
 
      })
    }else{
      this.editing = false;
    }
   }
 
   onChange(event){
    this.horario.empleado_id = event;
    //alert(event);
  }
  ngOnInit(): void {
  }

  insertHorario(){
    if(this.editing){
      console.log(this.horario);
     this.horarioService.put(this.horario).subscribe(
       data => {
        
         this.toastr.success('Perfecto!', 'Horario actualizado.');
        
       }, error =>{
         this.toastr.error('Este...', 'Parece que ocurrio un error.');
       });
     
    }else{
     console.log(this.horario);
     this.horarioService.insert(this.horario).subscribe(
       data => {
        
         this.toastr.success('Completado!', 'Horario registrado.');
        
       }, error =>{
         this.toastr.error('UPS!', 'Ocurrio un Error.');
       });
     
    }
  }
}
