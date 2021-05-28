import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Account } from '../models/account.model';
import { catchError, map } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  baseUrl = 'http://localhost:8080/';


  constructor(private http: HttpClient) {  }

  addAccount(accountToAdd: Account): Observable<any> {
    return this.http.post(this.baseUrl + 'REST/insertionaccount', accountToAdd);
  }
}


