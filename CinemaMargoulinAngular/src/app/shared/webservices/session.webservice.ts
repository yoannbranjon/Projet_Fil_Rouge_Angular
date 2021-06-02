import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Session } from '../models/session.model';
import { catchError, map } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionWebService {

  baseUrl = 'http://localhost:8080/';

  constructor(private http: HttpClient) {


   }
}
