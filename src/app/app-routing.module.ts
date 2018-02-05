import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SolicitudComponent} from './solicitud/solicitud.component';
import {PlanificacionComponent} from './planificacion/planificacion.component';
import {SolicitudesComponent} from './solicitudes/solicitudes.component';


const routes: Routes = [
  { path: 'solicitud', component: SolicitudComponent },
  { path: 'solicitudes', component: SolicitudesComponent },
  { path: 'planificacion', component: PlanificacionComponent }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
