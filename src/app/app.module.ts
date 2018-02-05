import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { SolicitudComponent } from './solicitud/solicitud.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {DesarrolloService} from './services/desarrollo.service';
import { PlanificacionComponent } from './planificacion/planificacion.component';
import { SolicitudesComponent } from './solicitudes/solicitudes.component';


@NgModule({
  declarations: [
    AppComponent,
    SolicitudComponent,
    PlanificacionComponent,
    SolicitudesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DesarrolloService],
  bootstrap: [AppComponent]
})
export class AppModule { }
