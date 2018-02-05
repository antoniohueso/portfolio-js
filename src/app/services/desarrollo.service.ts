import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Desarrollo} from '../app.entities';
import {catchError, tap, map} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class DesarrolloService {

  private desarrollosUrl = 'api/desarrollos';

  constructor(
    private http: HttpClient
  ) { }

  getDesarrollos(): Observable<Desarrollo[]> {

    return this.http.get<Desarrollo[]>(this.desarrollosUrl)
      .pipe(
        map(desarrollos => desarrollos['content']),
        tap(desarrollos => console.log('getDesarrollos: ', desarrollos)),
        catchError(this.handleError('getDesarrollos', []))
      );
  }

  addDesarrollo(desarrollo: Desarrollo): Observable<Desarrollo> {

    return this.http.post<Desarrollo>(this.desarrollosUrl, desarrollo, httpOptions)
      .pipe(
        tap((d: Desarrollo) => console.log('addDesarrollo: ', d)),
        catchError(this.handleError<Desarrollo>('addDesarrolo'))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(`${operation} failed: ${error.status} ${error.statusText} : ${error.body.error}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
