import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

//  Service 
import { EmpleadoService } from '../../../services/empleado.service';
import {Router, ActivatedRoute } from '@angular/router'
import { AuthService } from "../../../services/auth.service";
import { FormsModule } from "@angular/forms";
// toastr
import { ToastrService } from 'ngx-toastr';
import { Registro_Empleados } from 'src/app/interfaces/registro-empleados';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-crear-empleado',
  templateUrl: './crear-empleado.component.html',
  styleUrls: ['./crear-empleado.component.css']
})
export class CrearEmpleadoComponent implements OnInit {
  E ="E";
  A="A";
  R="R";

empleado: Registro_Empleados={
  nombres: null,
  apellidos: null,
  correo: null,
  foto_perfil: null,
  passwd: null,
  telefono: null,
  categoria: null
};
id: any;
editing: boolean=false;
empleados: Registro_Empleados[];
  constructor(
    public toastr: ToastrService,
    private http: HttpClient,
    private empleadoService: EmpleadoService,
    public router: Router,
    private activatedRoute: ActivatedRoute,
    public authService: AuthService
  ) { 
    this.id = this.activatedRoute.snapshot.params['id'];
   if(this.id){
     this.editing = true;
     this.empleadoService.select().subscribe((data: Registro_Empleados[]) =>{
   this.empleados=data;
   this.empleado = this.empleados.find((m) =>{ return m.id == this.id})
   console.log(this.empleado);

     })
   }else{
     this.editing = false;
   }
  }
  onChange(event){
    this.empleado.categoria = event;
    //alert(event);
  }
  ngOnInit() {
  }

   insertEmpleado(){
     if(this.editing){
       console.log(this.empleado);
      this.empleadoService.put(this.empleado).subscribe(
        data => {
         
          this.toastr.success('Perfecto!', 'Empleado actualizado.');
         
        }, error =>{
          this.toastr.error('Este...', 'Parece que ocurrio un error.');
        });
      
     }else{
      console.log(this.empleado);
      //alert(this.empleado.categoria);
      this.empleadoService.insert(this.empleado).subscribe(
        
        data => {
          
         
          this.toastr.success('Completado!', 'Empleado registrado.');
         
        }, error =>{
          this.toastr.error('UPS!', 'Ocurrio un Error.');
        });
      
     }
   }
}
