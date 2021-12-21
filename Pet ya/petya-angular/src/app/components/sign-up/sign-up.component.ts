import { Component, OnInit } from '@angular/core';

//Service
import { AuthService } from "../../services/auth.service";
import { Registro_Clientes } from "../../interfaces/registro-clientes"
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {


  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

}
