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

  getAllFilmsName(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl + 'REST/recupNameFilms');
  }

  addFilm(filmToAdd: Film): Observable<any> {
    return this.http.post(this.baseUrl + 'REST/addNewFilm', filmToAdd);
  }

  updateFilm(filmToUpdate: Film): Observable<any> {
    return this.http.put(this.baseUrl + 'REST/updateFilm', filmToUpdate);
  }

  deleteFilmById(id: number): Observable<any> {
    return this.http.delete(this.baseUrl + 'REST/deleteFilmById?id=' + id);
  }

  addListFilm(listFilmToAdd: Film[]): Observable<any> {
    return this.http.post(this.baseUrl + 'REST/addListFilms', listFilmToAdd);
  }

  getFilmById(id: number): Observable<any> {

    return this.http.get<Film>(this.baseUrl + 'REST/getFilmById?id=' + id);
  }

  updateFilmById(filmToUpdate: Film, id: number): Observable<any> {
    console.log({filmToUpdate, id});
    return this.http.put(this.baseUrl + 'REST/updateFilm', {filmToUpdate, id});

  }




}
