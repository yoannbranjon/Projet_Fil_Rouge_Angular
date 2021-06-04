import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {BreakpointObserver} from '@angular/cdk/layout';
import {StepperOrientation} from '@angular/material/stepper';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-info-film-resa',
  templateUrl: './info-film-resa.component.html',
  styleUrls: ['./info-film-resa.component.scss']
})
export class InfoFilmResaComponent implements OnInit {

  secondFormGroup = this._formBuilder.group({
    firstNameControl: ['', Validators.required],
    lastNameControl: ['', Validators.required],
    emailControl: ['', Validators.required],

  });
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required]
  });
  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required]
  });
  stepperOrientation: Observable<StepperOrientation>;

  constructor(
    private _snackBar: MatSnackBar,
    private _formBuilder: FormBuilder, breakpointObserver: BreakpointObserver) {
    this.stepperOrientation = breakpointObserver.observe('(min-width: 800px)')
      .pipe(map(({matches}) => matches ? 'horizontal' : 'vertical'));
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
  ngOnInit(): void {
  }

}
