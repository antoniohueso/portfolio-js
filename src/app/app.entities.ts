export const Tipo = {
  Evolutivo: 0,
  Proyecto: 1
};

export const Importancia = {
  Baja: 0,
  Media: 1,
  Alta: 2,
  Urgente: 3
};

export const Fase =  {
  BacklogDMO: 0,
  BacklogPrePriorizado: 1,
  BacklogPriorizado: 2,
  Analizando: 3,
  Analizado: 4
}


export class Actividad {
  id: number;
  name: string;
  startDate: Date = new Date();
  endDate: Date  = new Date();
  duration = 1;
  percentComplete = 0;
  dependencies: string;
}

export class Planificacion {
  avance = 0;
  startDate: Date;
  endDate: Date;
  private secuenciaActividadId = 0;
  actividades: Array<Actividad> = new Array<Actividad>();
  fechaLineaBase: Date;
  lineaBase: Planificacion;

  nextActividadId() {
    return ++this.secuenciaActividadId;
  }

}

export class Desarrollo {
  id: number;
  nombre: string;
  fechaCreacion: Date = new Date();
  solicitadaPor: string;
  justificacionNegocio: string;
  tipo: number = Tipo.Evolutivo;
  importancia: number = Importancia.Media;
  fechaCambioNormativo: Date;
  areasInvolucradas: string;
  planificacion: Planificacion = new Planificacion();
  fase: number = Fase.BacklogDMO;
}
