import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Film } from '../models/film.model';

import { catchError, map } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class FilmWebService {

  baseUrl = 'http://localhost:8080/'

  constructor(private http: HttpClient) { }

  getAllFilms(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl + 'REST/recupfilm');
  }

  addFilm(filmToAdd: Film): Observable<any> {
    return this.http.post(this.baseUrl + 'REST/addNewFilm', filmToAdd);
  }

  deleteFilmById(id: number): Observable<any> {
    return this.http.delete(this.baseUrl + 'REST/deleteFilmById?id=' + id);
  }

  addListFilm(listFilmToAdd: Film[]): Observable<any> {
    return this.http.post(this.baseUrl + 'REST/addListFilms', listFilmToAdd);
  }



}
