import { Injectable } from '@angular/core';
import { Subject, Observable} from 'rxjs';
import { Film } from '../models/film.model';

@Injectable({
  providedIn: 'root'
})
export class FilmServiceService {

  filmSelected$ = new Subject<Film>();
  constructor() { }

  getFilmSelected(): Observable<Film> {
    return this.filmSelected$.asObservable();
  }
  setFilmSelected(newFilmSelected : Film):void {
    this.filmSelected$.next(newFilmSelected);
  }
}
