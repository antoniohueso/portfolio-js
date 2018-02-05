import { Component, OnInit } from '@angular/core';
import {Desarrollo} from '../app.entities';
import {DesarrolloService} from '../services/desarrollo.service';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements OnInit {

  desarrollo = new Desarrollo();

  id = null;

  error = null;

  okMessage = false;

  constructor(private desarrolloService: DesarrolloService) { }

  ngOnInit() {}

  onSubmit() {
    let arr = [];

    arr = this.required(arr, this.desarrollo.nombre, 'Nombre');
    arr = this.required(arr, this.desarrollo.tipo, 'Tipo');
    arr = this.required(arr, this.desarrollo.importancia, 'Importancia');
    arr = this.required(arr, this.desarrollo.justificacionNegocio, 'Justificación de negocio');
    arr = this.required(arr, this.desarrollo.areasInvolucradas, 'Áreas involucradas');

    if (arr.length > 0) {
      this.error = arr.join(', ');
      return;
    }

    this.desarrolloService.addDesarrollo(this.desarrollo)
      .subscribe(d => {
        this.id = d.id;
        this.desarrollo = new Desarrollo();
        this.okMessage = true;
      });
  }

  required(arr, field, msg) {
    if (field == null || field === 'undefined' || (typeof field === 'string'  && field.trim() === '')) {
      arr.push(msg);
    }
    return arr;
  }
}
