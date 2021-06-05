import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Room } from '../models/room.model';
import { catchError, map } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomWebService {

  baseUrl = 'http://localhost:8080/'

  constructor(private http: HttpClient) { }

  getAllRooms(): Observable<Room[]> {
    return this.http.get<Room[]>(this.baseUrl + 'REST/recuproom');
  }

  addRoom(roomToAdd: Room): Observable<any> {
    return this.http.post(this.baseUrl + 'REST/addNewRoom', roomToAdd);
  }

  deleteRoomById(id: number): Observable<any> {
    return this.http.delete(this.baseUrl + 'REST/deleteRoomById?id=' + id);
  }
}
