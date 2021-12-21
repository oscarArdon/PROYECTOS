import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../services/auth.service";
import { ToastrService } from 'ngx-toastr';
import { Cliente } from "../../../interfaces/cliente";
import { ClienteService } from "../../../services/cliente.service";
@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent implements OnInit {
  id = 0;
  //objeto que llena los campos del form
  edit:Cliente =  { id:0,nombre:null,correo:null,telefono:null, contra:null };
  //arreglo que guarda todos los clientes
  clientes: Cliente[];
  constructor(public authService: AuthService,private toastr:ToastrService, private clientesService:ClienteService) {
    //select a todos los clientes y comparar con el id guardado en localstorage
    this.id=JSON.parse(localStorage.getItem('user'));

    this.clientesService.select().subscribe((data:Cliente[])=>{
      this.clientes=data;
      //console.log(this.clientes);
      this.edit=this.clientes.find((c)=>{return c.id == this.id});
      console.log(this.edit);
    },(error) => {
      console.log(error);
    });
   }

  ngOnInit(): void {

  }

  actualizarcliente(){
    this.clientesService.put(this.edit).subscribe((data) => {
      this.toastr.success("Actualizado exitosamente");

    }, (error) => {
      this.toastr.error("Ha ocurrido un error!");
      console.log(error);
    });

    //this.authService.SignUp(this.registro.correo, this.registro.contra);
  }


  

}
