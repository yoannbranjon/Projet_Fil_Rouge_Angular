import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Users } from '../models/users.model';
import { catchError, map } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersWebService {

  baseUrl = 'http://localhost:8080/';


  constructor(private http: HttpClient) {  }

  getAllUsers(): Observable<Users[]> {
    return this.http.get<Users[]>(this.baseUrl + 'REST/recupreservation');
  }

  addUser(UserToAdd: Users): Observable<any> {
    return this.http.post(this.baseUrl + 'REST/addNewUser', UserToAdd);
  }
}
