import { Component, OnInit } from '@angular/core';
import { FrmCita } from 'src/app/interfaces/frmcita';
import {FrmcitaService} from '../../services/frmcita.service';
import {Registro_Empleados} from '../../interfaces/registro-empleados';
import {Registro_Clientes} from '../../interfaces/registro-clientes';
import { ToastrService } from 'ngx-toastr';
import {Cita} from '../../interfaces/cita'
import { element } from 'protractor';
import {CitaService} from '../../services/cita.service';
import { threadId } from 'worker_threads';
import {Horario} from '../../interfaces/horario';
import {HorarioService} from '../../services/horario.service';
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-frm-cita',
  templateUrl: './frm-cita.component.html',
  styleUrls: ['./frm-cita.component.css']
})
export class FrmCitaComponent implements OnInit {
  frmcita: FrmCita = {
    fecha_cita: null,
    hora: null,
    nombre_mascota:null,
    especie:null,
    raza: null,
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
    cliente_id: parseInt(localStorage.getItem("user"))
  };
  
  objecita: Cita ={
    id_cliente:parseInt(localStorage.getItem("user")),
    nombre_mascota:null,
    fecha_cita:null,
    hora:null,
    tipo_cita:null,
    especificaciones:null,
    estado:null,
    id_empleado:null,
    id_formulario:null
  };

  

  frmcitas: FrmCita[];

  empleados: Registro_Empleados[]; //arreglo donde se guardaran los datos de los empleados
  clientes: Registro_Clientes[]; // arreglo donde se guradaran los datos de los clientes
  horarios: Horario[];

 
  
  constructor(private frcitaservice: FrmcitaService, public toastr: ToastrService, private citaservice: CitaService, private horaservice: HorarioService, public authService: AuthService) { 
    this.comboempleados();
    this.comboclientes();    
  }

  ngOnInit(): void {
  }
   //Metodo que se encarga de mandar el objeto frmcita al service 
  
   saveFrmcita(){
     //Guardando el tabla formulario-cita
    
    this.frcitaservice.save(this.frmcita).subscribe(data =>{    
      this.getidMayor();             
      //console.log(data);
    }, error => {
      console.log(this.frmcita);
      console.log(error);
      this.toastr.error("Error al guardar frmcita");
    });  
  }

  saveCita(){
    //Guardando en tabla citas    
    this.citaservice.savecita(this.objecita).subscribe(data =>{
      this.toastr.success("Cita guardada");      
    }, error => {
      console.log(error);
      this.toastr.error("Error al guardar cita");
    });
  }

  //metodo que obtiene los datos para llenar el comboBox empleados
  comboempleados(){
    this.frcitaservice.getEmpleados().subscribe((data: Registro_Empleados[]) =>{
      this.empleados = data;
      this.empleados = this.empleados.filter(emp => emp.categoria == "E");
    }, error =>{
      this.toastr.error("Error combo empleados!");      
    });
  }

  //metodo que obtiene los datos para llenar el combo clientes
  comboclientes(){
    this.frcitaservice.getClientes().subscribe((data: Registro_Clientes[]) =>{
      this.clientes = data;
    }, error =>{
      this.toastr.error("Error combo clientes!");      
    });
  }

  combohorario(numero){
    this.horaservice.select().subscribe((data: Horario[]) =>{
      if(data != null){
        this.horarios = null;
        this.horarios = data.filter(horar => horar.empleado_id == numero);
        console.log(this.horarios);
      }
      else{
        this.horarios = null;
        this.horarios = data;
      }       
    }, error =>{
      this.toastr.error("Error combo Horario!");      
    });
  }
//////////////////////////////
  identifi:number;//variable para guardar 
  getidMayor(){
    //obtengo los registros  de formulario citas
    this.frcitaservice.get().subscribe((data: FrmCita[]) =>{
      this.frmcitas = data;//se guardan los datos recibidos
      this.identifi = 0;//
      //recorremos los registros para encontrar y guardar el id mayor
      this.frmcitas.forEach(element =>{
        if(element.id > this.identifi){
          this.identifi = element.id;
        }      
      });
      this.objecita.id_formulario = this.identifi;// seteo el id de form al objeto de cita      
      this.saveCita();
    }, error =>{
      this.toastr.error("Error al obtener el id mayor!");      
    });    
  }

  /////////////////////////////
  //metodo que valide una cita repetida
  repetido:boolean;
  validaCita(){
    this.frcitaservice.get().subscribe((data: FrmCita[]) =>{
      this.frmcitas = data;//se guardan los datos recibidos     
      this.repetido = false;
      this.frmcitas.forEach(element =>{
        if(element.id_empleado == this.frmcita.id_empleado && element.fecha_cita == this.frmcita.fecha_cita && element.hora == this.frmcita.hora){
          this.repetido = true;
        }      
      });      
      if(this.repetido == false){
        this.saveFrmcita();
      }
      else{
        this.toastr.error("El empleado seleccionado ya tiene cita agendada en esa fecha y hora!");        
      }
    }, error =>{
      this.toastr.error("Error al validar registro!");      
    });  
  }
    
  resetForm(){
    this.frmcita.color = null;
    this.frmcita.edad = null;
    this.frmcita.especie = null;
    this.frmcita.fecha_cita = null;    
    this.frmcita.motivo = null;
    this.frmcita.nombre_mascota = null;
    this.frmcita.raza = null;
    this.frmcita.sexo = null;
    this.frmcita.vacunacion = null;
    this.frmcita.vacunas_realizadas = null;

    this.objecita.nombre_mascota = null;
    this.objecita.fecha_cita = null;
    this.objecita.id_formulario = null;

    this.horarios = null;
  }
}
