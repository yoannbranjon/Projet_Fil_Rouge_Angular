import { Component, OnInit } from '@angular/core';
import { FilmWebService } from '../shared/webservices/film.webservice';
import { AccountWebService } from '../shared/webservices/account.webservice';
import { Film } from '../shared/models/film.model';
import { Account } from '../shared/models/account.model';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {MatSnackBar} from '@angular/material/snack-bar';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-account-parent',
  templateUrl: './account-parent.component.html',
  styleUrls: ['./account-parent.component.scss']
})

export class AccountParentComponent implements OnInit {
  
  formAddReservation! :NgForm;
  durationInSeconds = 5;

  emailFormControl = new FormControl('', [
      Validators.required,
      Validators.email,
    ]);

  passwordFormControl = new FormControl('', [
      Validators.requiredTrue
  ]);
  
  matcher = new MyErrorStateMatcher();
  

  /*filmList: any[] = [];
  password: string = '';*/

  constructor(
    private _snackBar: MatSnackBar,
    private accountWebService: AccountWebService,
  ) { }

  ngOnInit() {

    //Films
   // this.getAllFilms(); 

    // Posts
    this.addAccount();
  }

  openSnackBar() {
    this.durationInSeconds;
  }


  addAccount() {
    const accountToAdd = new Account("branjonyoann@hotmail.fr", "hohilf");
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
