import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { AuthService } from "../../../services/auth.service";
import {FormularioCita} from "../../../interfaces/formulario-citas"
import {Cita} from "../../../interfaces/cita"
import { FormsModule } from "@angular/forms";
import {Router, ActivatedRoute } from '@angular/router'
import {CitaService} from "../../../services/cita.service";
import {FormularioCitaService} from "../../../services/formulario-cita.service";
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-editar-citas',
  templateUrl: './editar-citas.component.html',
  styleUrls: ['./editar-citas.component.css']
})
export class EditarCitasComponent implements OnInit {
  P = "P";
  C = "C";

  cita: Cita={
    id_cliente:null,
    nombre_mascota:null,
    fecha_cita:null,
    hora:null,
    tipo_cita:null,
    especificaciones:null,
    estado: null,
    id_empleado: null,
    id_formulario: null
  };
  formulariocita: FormularioCita={
    fecha_cita: null,
    hora:null,
    nombre_mascota:null,
    especie:null,
    raza:null,
    edad:null,
    sexo:null,
    color:null,
    vacunacion:null,
    motivo:null,
    vacunas_realizadas:null,
    id_empleado:null,
    peso:null,
    pulso:null,
    temperatura:null,
    cliente_id:null
  };
  id: any;
  editing: boolean=false;
  citas: Cita[];
  formulariocitas: FormularioCita[];
  constructor(public authService: AuthService,
    public toastr: ToastrService,
    private http: HttpClient,
    private citaService: CitaService ,
    private formularioCitaService: FormularioCitaService,
    public router: Router,
    private activatedRoute: ActivatedRoute) { 
    this.id = this.activatedRoute.snapshot.params['id'];
    if(this.id){
      this.editing = true;
      this.citaService.select().subscribe((data: Cita[]) =>{
    this.citas=data;
    this.cita = this.citas.find((m) =>{ return m.id == this.id})
    let idfrmcita = this.cita;
    this.formularioCitaService.select().subscribe((dato: FormularioCita[]) =>{
      this.formulariocitas = dato;
      this.formulariocitas.forEach(elemento =>{
        if(idfrmcita.id_formulario == elemento.id){
          this.formulariocita = this.formulariocitas.find((n) =>{ return n.id == idfrmcita.id_formulario});
          console.log(elemento.id);
        }
      })
        })
   
  
      })
     
    }else{
      this.editing = false;
    }
   }
   onChange(event){
    this.cita.estado = event;
    //alert(event);
  }

  ngOnInit(): void {
  }

  ActualizarCita(){
    if(this.editing){
      console.log(this.formulariocita);
      console.log(this.cita);

     this.citaService.put(this.cita).subscribe(
       data => {
        
         this.toastr.success('Perfecto!', 'Cita actualizada.');
         this.router.navigate(['listar-citas']);
        
       }, error =>{
         this.toastr.error('Este...', 'Parece que ocurrio un error.');
       });
       this.formularioCitaService.put(this.formulariocita).subscribe(
        data => {
    
        });
     
    }
  }
}
