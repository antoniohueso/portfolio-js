import {Component, Input, OnInit} from '@angular/core';
import {Actividad, Desarrollo} from '../app.entities';
import {DesarrolloService} from '../services/desarrollo.service';

@Component({
  selector: 'app-planificacion',
  templateUrl: './planificacion.component.html',
  styleUrls: ['./planificacion.component.css']
})
export class PlanificacionComponent implements OnInit {

  @Input() desarrollo = new Desarrollo();

  error = null;

  okMessage = false;

  actividad: Actividad;

  constructor(private desarrolloService: DesarrolloService) { }

  ngOnInit() {

    google.charts.load('current', {'packages': ['gantt']});
    google.charts.setOnLoadCallback(this.drawChart);

  }

  add() {
    this.actividad = new Actividad();
    this.actividad.id = this.desarrollo.planificacion.nextActividadId();
    this.desarrollo.planificacion.actividades.push(this.actividad);
  }

  guardar() {}

  comenzar() {}

  drawChart() {

    function daysToMilliseconds(days) {
      return days * 24 * 60 * 60 * 1000;
    }

    const data = new google.visualization.DataTable();
    data.addColumn('string', 'Task ID');
    data.addColumn('string', 'Task Name');
    data.addColumn('date', 'Start Date');
    data.addColumn('date', 'End Date');
    data.addColumn('number', 'Duration');
    data.addColumn('number', 'Percent Complete');
    data.addColumn('string', 'Dependencies');

    data.addRows([
      ['Research', 'Find sources',
        new Date(2015, 0, 1), new Date(2015, 0, 5), null,  100,  null],
      ['Write', 'Write paper',
        null, new Date(2015, 0, 9), daysToMilliseconds(3), 25, 'Research,Outline'],
      ['Cite', 'Create bibliography',
        null, new Date(2015, 0, 7), daysToMilliseconds(1), 20, 'Research'],
      ['Complete', 'Hand in paper',
        null, new Date(2015, 0, 10), daysToMilliseconds(1), 0, 'Cite,Write'],
      ['Outline', 'Outline paper',
        null, new Date(2015, 0, 6), daysToMilliseconds(1), 100, 'Research']
    ]);

    const options = {
      height: 275
    };

    const chart = new google.visualization.Gantt(document.getElementById('chart_id'));

    chart.draw(data, options);
  }

}
