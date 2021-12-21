import { Component, OnInit } from '@angular/core';
import { CitaService } from '../../services/cita.service';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { AuthService } from "../../services/auth.service";
import { element } from 'protractor';
import { FormularioCitaService} from '../../services/formulario-cita.service'
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-recepcion',
  templateUrl: './recepcion.component.html',
  styleUrls: ['./recepcion.component.css']
})
export class RecepcionComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

}
