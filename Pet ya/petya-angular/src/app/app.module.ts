import { FormsModule } from '@angular/forms';
//firebase
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';

import { AngularFireDatabaseModule } from '@angular/fire/database';
//Service
import { AuthService } from "./services/auth.service";
import { AuthGuard } from "./guard/auth.guard";
import { ToastrModule } from 'ngx-toastr';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { HttpClientModule } from '@angular/common/http';
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { EmpleadoHorariosComponent } from './components/empleado/empleado-horarios/empleado-horarios.component';
import { AdministradorComponent } from './components/administrador/administrador.component';
import { CrearEmpleadoComponent } from './components/administrador/crear-empleado/crear-empleado.component';
import { ListarEmpleadosComponent } from './components/administrador/listar-empleados/listar-empleados.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ClienteListComponent } from './components/clientes/cliente-list/cliente-list.component';
import { AgregarClienteComponent } from './components/clientes/agregar-cliente/agregar-cliente.component';
import { EditarClienteComponent } from './components/clientes/editar-cliente/editar-cliente.component';
import { CrearHorariosComponent } from './components/administrador/control-horarios/crear-horarios/crear-horarios.component';
import { ListarHorariosComponent } from './components/administrador/control-horarios/listar-horarios/listar-horarios.component';
import { ControlHorariosComponent } from './components/administrador/control-horarios/control-horarios.component';
import { DashboardClienteComponent } from './components/dashboard-cliente/dashboard-cliente.component';
import { FrmCitaComponent } from './components/frm-cita/frm-cita.component';
import { TablaCitasComponent } from './components/frm-cita/tabla-citas/tabla-citas.component';
import { RecepcionComponent } from './components/recepcion/recepcion.component';
import { ListarCitasComponent } from './components/recepcion/listar-citas/listar-citas.component';
import { EmpleadoCitasComponent } from './components/empleado/empleado-citas/empleado-citas.component';
import { EmpleadoDiagnosticosComponent } from './components/empleado/empleado-diagnosticos/empleado-diagnosticos.component';
import { ListarDiagnosticosComponent } from './components/empleado/listar-diagnosticos/listar-diagnosticos.component';
import { EditarCitasComponent } from './components/recepcion/editar-citas/editar-citas.component';
import { DashboardGoogleComponent } from './components/dashboard-google/dashboard-google.component';



@NgModule({
  declarations: [

    AppComponent,
    IndexComponent,
    DashboardComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    EmpleadoComponent,
    EmpleadoHorariosComponent,
    AdministradorComponent,
    CrearEmpleadoComponent,
    ListarEmpleadosComponent,
    ClientesComponent,
    ClienteListComponent,
    AgregarClienteComponent,
    EditarClienteComponent,
    CrearHorariosComponent,
    ListarHorariosComponent,
    ControlHorariosComponent,
    DashboardClienteComponent,
    FrmCitaComponent,
    TablaCitasComponent,
    RecepcionComponent,
    ListarCitasComponent,
    EmpleadoCitasComponent,
    EmpleadoDiagnosticosComponent,
    ListarDiagnosticosComponent,
    EditarCitasComponent,
    DashboardGoogleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    FormsModule,
    ToastrModule.forRoot(),
    HttpClientModule, BrowserAnimationsModule
   
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
