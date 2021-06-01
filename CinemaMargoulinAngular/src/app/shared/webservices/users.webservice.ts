import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from '../models/user.model';
import { catchError, map } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersWebService {

  baseUrl = 'http://localhost:8080/';


  constructor(private http: HttpClient) {  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl + 'REST/recupreservation');
  }

  addUser(UserToAdd: User): Observable<any> {
    return this.http.post(this.baseUrl + 'REST/addNewUser', UserToAdd);
  }
}
