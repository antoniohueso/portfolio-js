import { Component, OnInit } from '@angular/core';
import {Desarrollo, Solicitud} from '../app.entities';
import {DesarrolloService} from '../services/desarrollo.service';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements OnInit {

  solicitud: Solicitud = new Solicitud();

  error = null;

  constructor(private desarrolloService: DesarrolloService) { }

  ngOnInit() {
    this.desarrolloService.getDesarrollos()
      .subscribe(d => {
        console.log('OK GET: ', d);
      });

  }

  onSubmit() {
    let arr = [];

    arr = this.required(arr, this.solicitud.nombre, 'Nombre');
    arr = this.required(arr, this.solicitud.tipo, 'Tipo');
    arr = this.required(arr, this.solicitud.importancia, 'Importancia');
    arr = this.required(arr, this.solicitud.justificacionNegocio, 'Justificación de negocio');
    arr = this.required(arr, this.solicitud.areasInvolucradas, 'Áreas involucradas');

    if (arr.length > 0) {
      this.error = arr.join(', ')
      return;
    }

    const desarrollo = new Desarrollo();
    desarrollo.solicitud = this.solicitud;

    this.desarrolloService.addDesarrollo(desarrollo)
      .subscribe(d => {
        console.log('OK: ', d);
      });

    console.log(this.solicitud);
  }

  required(arr, field, msg) {
    if (!field) {
      arr.push(msg);
    }
    return arr;
  }
}
