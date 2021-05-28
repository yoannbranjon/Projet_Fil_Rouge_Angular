import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from '../models/user.model';
import { catchError, map } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseUrl = 'http://localhost:8080/';


  constructor(private http: HttpClient) {  }

  addUser(UserToAdd: User): Observable<any> {
    return this.http.post(this.baseUrl + 'REST/addNewUser', UserToAdd);
  }
}
