import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Film } from '../models/film.model';

import { catchError, map } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class FilmWebService {

  baseUrl = 'https://localhost:8080/'

  constructor(private http: HttpClient) { }

  getAllFilms(): Observable<Film[]> {
    return this.http.get<Film[]>(this.baseUrl + 'REST/recupfilm');
  }



}