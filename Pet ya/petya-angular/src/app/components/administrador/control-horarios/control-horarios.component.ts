import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../services/auth.service";
@Component({
  selector: 'app-control-horarios',
  templateUrl: './control-horarios.component.html',
  styleUrls: ['./control-horarios.component.css']
})
export class ControlHorariosComponent implements OnInit {

  constructor(public authService:AuthService) { }

  ngOnInit(): void {
  }

}
