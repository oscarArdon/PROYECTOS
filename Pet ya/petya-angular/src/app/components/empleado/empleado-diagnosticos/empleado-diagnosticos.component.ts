import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { AuthService } from "../../../services/auth.service";
import {FormularioCita} from "../../../interfaces/formulario-citas"
import {Cita} from "../../../interfaces/cita"
import {Router, ActivatedRoute } from '@angular/router'
import {CitaService} from "../../../services/cita.service";
import {FormularioCitaService} from "../../../services/formulario-cita.service";
import { DiagnosticoService} from "../../../services/diagnostico.service"
import { ToastrService } from 'ngx-toastr';
import { Diagnostico } from '../../../interfaces/diagnostico';
import { element } from 'protractor';
@Component({
  selector: 'app-empleado-diagnosticos',
  templateUrl: './empleado-diagnosticos.component.html',
  styleUrls: ['./empleado-diagnosticos.component.css']
})
export class EmpleadoDiagnosticosComponent implements OnInit {
  F="F";

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
  formulariocita={
    fecha_cita: null, hora:null, nombre_mascota:null,
    especie:null, raza:null, edad:null, sexo:null, color:null,
    vacunacion:null, motivo:null, vacunas_realizadas:null,
    id_empleado:null, peso:null, pulso:null,
    temperatura:null,
    cliente_id:null
  };
  diagnostico:Array<{
     cliente_id: number,
     nombre_mascota:string,
     especie:string,
     raza:string,
     edad:string,
     sexo:string,
     color:string,
     vacunacion:string,
     motivo:string,
     vacunas_realizadas:string,
     peso:string,
     pulso:string,
     temperatura:string,
     diagnostico_final: string,
     tratamiento: string,
     empleado_id:string
    }> = [];

     cliente_id;
     nombre_mascota;
     especie;
     raza;
     edad;
     sexo;
     color;
     vacunacion;
     motivo;
     vacunas_realizadas;
     peso;
     pulso;
     temperatura;
     empleado_id;
  diagnostico_final:null;
  tratamiento: null;
  id: any;
  editing: boolean=false;
  citas: Cita[];
  formulariocitas: FormularioCita[];
  
  constructor( public httpClient: HttpClient, public authService: AuthService,
    public toastr: ToastrService,
    private citaService: CitaService ,
    private diagnosticoService: DiagnosticoService,
    private formularioCitaService: FormularioCitaService,
    public router: Router,
    private activatedRoute: ActivatedRoute) { 
      this.id = this.activatedRoute.snapshot.params['id'];
    
        this.citaService.select().subscribe((data: Cita[]) =>{
      this.citas=data;
      this.cita = this.citas.find((m) =>{ return m.id == this.id})
      let idfrmcita = this.cita;
      this.formularioCitaService.select().subscribe((dato: FormularioCita[]) =>{
        this.formulariocitas = dato;
        this.formulariocitas.forEach(elemento =>{
          if(idfrmcita.id_formulario == elemento.id){
            this.formulariocita = this.formulariocitas.find((n) =>{ return n.id == idfrmcita.id_formulario});
           
          
    
          }
        })
          })
     
    
        })
     
    }
    onChange(event){
      this.cita.estado = event;
      //alert(event);
    }
  ngOnInit(): void {
  }

  GenerarDiagnostico(){
    
    this.cliente_id = this.formulariocita.cliente_id;
    this.nombre_mascota=this.formulariocita.nombre_mascota;
    this.especie=this.formulariocita.especie;
    this.raza=this.formulariocita.raza;
    this.edad=this.formulariocita.edad;
    this.sexo=this.formulariocita.sexo;
    this.color=this.formulariocita.color;
    this.vacunacion=this.formulariocita.vacunacion;
    this.motivo=this.formulariocita.motivo;
    this.vacunas_realizadas=this.formulariocita.vacunas_realizadas;
    this.peso=this.formulariocita.peso;
    this.pulso=this.formulariocita.pulso;
    this.temperatura=this.formulariocita.temperatura;
    this.empleado_id=this.formulariocita.id_empleado;
  
     this.diagnostico.push({ cliente_id: this.cliente_id, nombre_mascota: this.nombre_mascota, especie: this.especie
      ,raza: this.raza ,edad: this.edad ,sexo: this.sexo ,color: this.color ,vacunacion: this.vacunacion ,
      motivo: this.motivo , vacunas_realizadas: this.vacunas_realizadas , peso: this.peso , pulso: this.pulso ,
       temperatura: this.temperatura , diagnostico_final: this.diagnostico_final ,tratamiento: this.tratamiento , 
       empleado_id: this.empleado_id});
      console.log(this.diagnostico);
      let diagform;
       this.diagnostico.forEach(element =>{
        diagform = element;
      });
     this.diagnosticoService.insert(diagform).subscribe(
       data => {
        
         this.toastr.success('Diagnostico realizado.', 'Perfecto!');
        
       }, error =>{
         this.toastr.error('Parece que ocurrio un error.', 'Este...');
       });
       this.citaService.put(this.cita).subscribe(
        data => {
    
        });
     
    
  }
}
