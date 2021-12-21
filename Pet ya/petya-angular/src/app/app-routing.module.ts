import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { AuthGuard } from "./guard/auth.guard";
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { AdministradorComponent } from './components/administrador/administrador.component';
import { AgregarClienteComponent } from './components/clientes/agregar-cliente/agregar-cliente.component';
import { ClienteListComponent } from './components/clientes/cliente-list/cliente-list.component';
import { EditarClienteComponent } from './components/clientes/editar-cliente/editar-cliente.component';
import { CrearEmpleadoComponent } from './components/administrador/crear-empleado/crear-empleado.component'
import { ListarEmpleadosComponent } from './components/administrador/listar-empleados/listar-empleados.component'
import { ControlHorariosComponent } from './components/administrador/control-horarios/control-horarios.component'
import {CrearHorariosComponent} from './components/administrador/control-horarios/crear-horarios/crear-horarios.component'
import {ListarHorariosComponent} from './components/administrador/control-horarios/listar-horarios/listar-horarios.component'
import {DashboardClienteComponent} from './components/dashboard-cliente/dashboard-cliente.component';
import {EmpleadoHorariosComponent} from './components/empleado/empleado-horarios/empleado-horarios.component';
import { ListarCitasComponent } from './components/recepcion/listar-citas/listar-citas.component';
import { EmpleadoCitasComponent } from './components/empleado/empleado-citas/empleado-citas.component';
import { EmpleadoDiagnosticosComponent } from './components/empleado/empleado-diagnosticos/empleado-diagnosticos.component';
import { RecepcionComponent } from './components/recepcion/recepcion.component';
import { EditarCitasComponent } from './components/recepcion/editar-citas/editar-citas.component';
import { ListarDiagnosticosComponent } from './components/empleado/listar-diagnosticos/listar-diagnosticos.component';
import { DashboardGoogleComponent } from './components/dashboard-google/dashboard-google.component';
import {FrmCitaComponent} from './components/frm-cita/frm-cita.component';
import {TablaCitasComponent} from './components/frm-cita/tabla-citas/tabla-citas.component';
const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'index', component: IndexComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'register-user', component: SignUpComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
  { path: 'empleado', component: EmpleadoComponent,canActivate:[AuthGuard] },
  { path: 'crear-empleado', component: CrearEmpleadoComponent,canActivate:[AuthGuard] },
  { path: 'listar-empleado', component: ListarEmpleadosComponent,canActivate:[AuthGuard] },
  { path: 'administrador', component: AdministradorComponent,canActivate:[AuthGuard] },
  { path: 'administrador/:id', component: CrearEmpleadoComponent },
  { path: 'crear-horarios', component: CrearHorariosComponent,canActivate:[AuthGuard] },
  { path: 'listar-horarios', component: ListarHorariosComponent,canActivate:[AuthGuard] },
  { path: 'mis-horarios', component: EmpleadoHorariosComponent,canActivate:[AuthGuard] },
  { path: 'control-horarios/:id', component: CrearHorariosComponent,canActivate:[AuthGuard] },
  { path: 'agregar-cliente', component: AgregarClienteComponent,canActivate:[AuthGuard] },
  { path: 'editar-cliente', component: EditarClienteComponent,canActivate:[AuthGuard] },
  {path:'editar-cliente/:id',component:EditarClienteComponent},
  { path: 'dashboard-cliente', component: DashboardClienteComponent,canActivate:[AuthGuard] },
  { path: 'dashboard-google', component: DashboardGoogleComponent,canActivate:[AuthGuard] },
  { path: 'listar-citas', component: ListarCitasComponent,canActivate:[AuthGuard] },
  { path: 'empleado-citas', component: EmpleadoCitasComponent,canActivate:[AuthGuard] },
  { path: 'empleado-diagnosticos', component: EmpleadoDiagnosticosComponent,canActivate:[AuthGuard] },
  { path: 'recepcion/:id', component: EditarCitasComponent },
  { path: 'empleado/:id', component: EmpleadoDiagnosticosComponent },
  { path: 'listar-diagnosticos', component: ListarDiagnosticosComponent,canActivate:[AuthGuard] },
  { path: 'agregar-cita', component:FrmCitaComponent, canActivate:[AuthGuard]},
  { path: 'tabla-cita', component:TablaCitasComponent, canActivate:[AuthGuard]}
];


@NgModule({
  imports: [RouterModule.forRoot(routes,{onSameUrlNavigation:"ignore",anchorScrolling:'enabled',scrollPositionRestoration:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
