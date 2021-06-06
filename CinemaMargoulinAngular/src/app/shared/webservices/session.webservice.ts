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
   
   getAllSessions(): Observable<Session[]> {
    return this.http.get<Session[]>(this.baseUrl + 'REST/recupsession');
  }

  addSession(sessionToAdd: Session): Observable<any> {
    return this.http.post(this.baseUrl + 'REST/addNewSession', sessionToAdd);
  }

  deleteSessionById(id: number): Observable<any> {
    return this.http.delete(this.baseUrl + 'REST/deleteSessionById?id=' + id);
  }

  updateSession(sessionToUpdate: Session): Observable<any> {
    return this.http.put(this.baseUrl + 'REST/updateSession', sessionToUpdate);
  }
}

