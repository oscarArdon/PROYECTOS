import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../../services/empleado.service';
import { HttpClient } from '@angular/common/http';
import { AuthService } from "../../services/auth.service";
@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {


  constructor(public authService: AuthService) { 
 
  }

  ngOnInit(): void {
   
  }

}
