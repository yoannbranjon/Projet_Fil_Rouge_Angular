import { Injectable } from '@angular/core';
import { Film } from '../models/film.model';
import { BehaviorSubject } from 'rxjs';

import { catchError, map } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs'; 
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Injectable({
  providedIn: 'root'
})
export class TransfertService {

  private idSubject$ = new BehaviorSubject<number>(0);

  getIdSubject(): Observable<number> {
    return this.idSubject$.asObservable();
  }


   setIdSubject(idToCatch: number): void {
    this.idSubject$.next(idToCatch);
  }
 
}
