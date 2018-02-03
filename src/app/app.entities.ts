export const Tipo = {
  Evolutivo: 0,
  Proyecto: 1
};

export const Importancia = {
  Baja: 0,
  Media: 1,
  Alta: 2,
  Urgente: 99
};

export const Fase =  {
  BacklogDMO: 0,
  BacklogPrePriorizado: 1,
  BacklogPriorizado: 2,
  Analizando: 3,
  Analizado: 4
}

export class Solicitud {
  nombre: string;
  creada: Date = new Date();
  solicitadaPor: string;
  justificacionNegocio: string;
  tipo: number = Tipo.Evolutivo;
  importancia: number = Importancia.Media;
  fechaCambioNormativo: Date;
  areasInvolucradas: string;
}


export class Desarrollo {
  id: number;
  solicitud: Solicitud;
}
