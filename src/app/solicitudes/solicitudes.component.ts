import { Component, OnInit } from '@angular/core';
import {DesarrolloService} from '../services/desarrollo.service';
import {Desarrollo} from '../app.entities';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.css']
})
export class SolicitudesComponent implements OnInit {

  desarrollos: Desarrollo[] = [];

  constructor(private desarrolloService: DesarrolloService) { }

  ngOnInit() {
    this.desarrolloService.getDesarrollos()
      .subscribe(d => {
        this.desarrollos = d;
      });
  }

}
