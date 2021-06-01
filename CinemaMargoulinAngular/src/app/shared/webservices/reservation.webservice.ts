import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Reservation } from '../models/reservation.model';
import { catchError, map } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationWebService {

  baseUrl = 'http://localhost:8080/'

  constructor(private http: HttpClient) { }

  getAllReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(this.baseUrl + 'REST/recupreservation');
  }

  addReservation(reservationToAdd: Reservation): Observable<any> {
    return this.http.post(this.baseUrl + 'REST/addNewReservation', reservationToAdd);
  }
}
