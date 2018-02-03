import { Component, OnInit } from '@angular/core';
import {Solicitud} from '../app.entities';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements OnInit {

  solicitud: Solicitud = new Solicitud();

  error = null;

  constructor() { }

  ngOnInit() {
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

    console.log(this.solicitud);
  }

  required(arr, field, msg) {
    if (!field) {
      arr.push(msg);
    }
    return arr;
  }
}
