import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { SolicitudComponent } from './solicitud/solicitud.component';
import {FormsModule} from '@angular/forms';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './services/in-memory-data.service';
import {HttpClientModule} from '@angular/common/http';
import {DesarrolloService} from './services/desarrollo.service';


@NgModule({
  declarations: [
    AppComponent,
    SolicitudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false })

  ],
  providers: [DesarrolloService],
  bootstrap: [AppComponent]
})
export class AppModule { }
