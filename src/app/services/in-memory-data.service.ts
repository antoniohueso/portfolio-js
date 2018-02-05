import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Desarrollo, Solicitud} from '../app.entities';

@Injectable()
export class InMemoryDataService implements InMemoryDbService {

  createDb() {

    const desarrollos = [];

    for (let i = 1; i <= 10; i++ ) {
      const d = new Desarrollo();
      d.id = i;
      d.solicitud = new Solicitud();
      d.solicitud.nombre = `Solicitud de desarrollo ${i}`;
      d.solicitud.justificacionNegocio = `justificación de negocio ${i}`;
      d.solicitud.areasInvolucradas = `áreas involucradas ${i}`;
      d.solicitud.importancia = Math.floor((Math.random() * 3));
      d.solicitud.tipo = Math.floor((Math.random() * 2));
      d.solicitud.solicitadaPor = 'ahg';
      desarrollos.push(d);
    }

    return {desarrollos};
  }

}
