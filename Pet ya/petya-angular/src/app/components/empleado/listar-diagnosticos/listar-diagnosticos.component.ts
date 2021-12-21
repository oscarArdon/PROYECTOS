import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../../../services/empleado.service';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { AuthService } from "../../../services/auth.service";
import { Diagnostico } from '../../../interfaces/diagnostico';
import { element } from 'protractor';
import { Registro_Empleados} from '../../../interfaces/registro-empleados';
import { DiagnosticoService} from '../../../services/diagnostico.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { ToastrService } from 'ngx-toastr';
//modulos pdf
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-listar-diagnosticos',
  templateUrl: './listar-diagnosticos.component.html',
  styleUrls: ['./listar-diagnosticos.component.css']
})
export class ListarDiagnosticosComponent implements OnInit {
  API_ENDPOINT = 'http://localhost:8000/api';
  diagnosticos: Diagnostico[];
  correo: AuthService[];
  id_empleado=0;
  lista_diagnosticos=null;
  horarios_user;
  lista_empleados: Registro_Empleados[];
  oculto = true;
  diagnostico_empleados= [];
  constructor(private empleadoService: EmpleadoService,public toastr: ToastrService,
    public httpClient: HttpClient, public authService: AuthService,
    private diagnosticoService: DiagnosticoService) { 
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
       this.httpClient.get( this.API_ENDPOINT+'/petya-diagnosticos').subscribe(
         (datos: Diagnostico[]) =>
        {
          this.lista_diagnosticos = datos;
          this.lista_diagnosticos.forEach((element) => {
            if(element.empleado_id == id){
              this.diagnostico_empleados.push(element) ;
              console.log(this.diagnostico_empleados)
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
  
  reporte = [];
  ponerId(id){
    this.reporte = [];
    this.diagnostico_empleados.forEach((element)=>{
      if(element.id === id){
        this.reporte.push(element);
        console.log(this.reporte);        
      }
    })
  }

  downloadpdf():void{
    
    const data = document.getElementById('htmlData');
    const doc = new jsPDF('p','pt','a4');
    const options = {
      background:'white',
      scale:3
    };
    html2canvas(data, options).then((canvas)=>{
      const img = canvas.toDataURL('image/PNG');

      const bufferX = 50;
      const bufferY = 50;
      const imgProps = (doc as any).getImageProperties(img);
      const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
      const pdfHeight = (imgProps.height * pdfWidth)/imgProps.width;
      doc.addImage(img, 'PNG', bufferX, bufferY, 350, 650, undefined, 'FAST');
      return doc;
    }).then((docResult) => {
      docResult.save('diagnostico.pdf');
    })
    
  }

  delete(id){
    if(confirm('Esta seguro de eliminar esta diagnostico?')){
      this.diagnosticoService.delete(id).subscribe(data =>
        {
         this.toastr.success('Perfecto!', 'Diagnostico eliminado.');
        }, error =>{
         this.toastr.error('Hey!', 'No se pudo eliminar el registro.');
        })
    }
   
  }
}
