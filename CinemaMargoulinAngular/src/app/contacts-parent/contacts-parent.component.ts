import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {ContactWebService} from '../shared/webservices/contact.webservice';
import { Contact } from '../shared/models/contact.model';
import {BreakpointObserver} from '@angular/cdk/layout';
import {StepperOrientation} from '@angular/material/stepper';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';


/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-contacts-parent',
  templateUrl: './contacts-parent.component.html',
  styleUrls: ['./contacts-parent.component.scss']
})

export class ContactsParentComponent implements OnInit {

  //Instanciation 
  contact = new Contact("Anthony","Thual","thualanthony@gmail.com","no comment")
  matcher = new MyErrorStateMatcher();
  stepperOrientation: Observable<StepperOrientation>;

  firstFormGroup = this._formBuilder.group({
    emailFormControl: ['', Validators.required]

  });

  //constructeur
    constructor(
      private ContactWebService : ContactWebService,
      private _formBuilder: FormBuilder, breakpointObserver: BreakpointObserver) {
      this.stepperOrientation = breakpointObserver.observe('(min-width: 800px)')
        .pipe(map(({matches}) => matches ? 'horizontal' : 'vertical'));
    }

  //OnInit
  ngOnInit(): void {
    this.addContact();
  }

  //ajout d'un objet contact dans la bdd
  addContact() {
    this.ContactWebService.addContact(this.contact).subscribe(
      (data) => {

        console.log('TestWebServiceComponent addContact', data);
      }, (error) => {
        console.error(error);
      }
    );
  }

}
