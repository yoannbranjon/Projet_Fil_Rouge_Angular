import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Account } from '../models/account.model';
import { catchError, map } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountWebService {

  baseUrl = 'http://localhost:8080/';


  constructor(private http: HttpClient) {  }

  getAllAccounts(): Observable<Account[]> {
    return this.http.get<Account[]>(this.baseUrl + 'REST/recupaccount');
  }

  addAccount(accountToAdd: Account): Observable<any> {
    return this.http.post(this.baseUrl + 'REST/addNewAccount', accountToAdd);
  }
}


