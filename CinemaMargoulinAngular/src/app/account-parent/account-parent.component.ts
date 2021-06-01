import { Component, OnInit } from '@angular/core';
import { FilmWebService } from '../shared/webservices/film.webservice';
import { AccountWebService } from '../shared/webservices/account.webservice';
import { Film } from '../shared/models/film.model';
import { Account } from '../shared/models/account.model';

@Component({
  selector: 'app-account-parent',
  templateUrl: './account-parent.component.html',
  styleUrls: ['./account-parent.component.scss']
})

export class AccountParentComponent implements OnInit {
  filmList: any[] = [];
  email: string = '';
  password: string = '';

  constructor(
    private filmWebService: FilmWebService,
    private accountWebService: AccountWebService,


  ) { }

  ngOnInit() {

    //Films
    this.getAllFilms(); 

    // Posts
    this.addAccount();
  }

  getAllFilms() {

    this.filmWebService.getAllFilms().subscribe(
      (data) => {

        //getAllFilms Next
        console.log('TestWebServiceComponent getAllFilms', data);
        this.filmList = data;},
        (error) => {
          console.error(error);
        }
    );
      }

  addAccount() {
    const accountToAdd = new Account(1, "branjonyoann@hotmail.fr", "hohilf");
    this.accountWebService.addAccount(accountToAdd).subscribe(
      (data) => {
        // getAccount Next
         console.log('TestWebServiceComponent addAccount', data);
          }, (error) => {
            console.error(error);
          }
        );
      }




}
