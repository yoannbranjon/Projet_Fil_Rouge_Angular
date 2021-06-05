import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Contact } from '../models/contact.model';
import { catchError, map } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactWebService {

  baseUrl = 'http://localhost:8080/';

  constructor(private http: HttpClient) {  }

  getAllContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.baseUrl + 'REST/recupcontact');
  }

  addContact(contactToAdd: Contact): Observable<any> {
    return this.http.post(this.baseUrl + 'REST/addNewContact', contactToAdd);
  }
}