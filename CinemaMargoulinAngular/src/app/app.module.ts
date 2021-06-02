/******** MODULES *******/
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';

/******* ROUTES *******/
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeParentComponent } from './home-parent/home-parent.component';
import { PracticalInfosParentComponent } from './practical-infos-parent/practical-infos-parent.component';
import { OnDisplayParentComponent } from './on-display-parent/on-display-parent.component';
import { ContactsParentComponent } from './contacts-parent/contacts-parent.component';
import { QuizzParentComponent } from './quizz-parent/quizz-parent.component';
import { AccountParentComponent } from './account-parent/account-parent.component';
import { NewUserComponent } from './new-user/new-user.component';
import { OnDisplayChildComponent } from './on-display-parent/on-display-child/on-display-child.component';

/******* ANGULAR MATERIAL ********/ 
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatSliderModule } from '@angular/material/slider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';


/******* SERVICES *******/
import { FilmWebService } from './shared/webservices/film.webservice';
import { FilmServiceService } from './shared/services/film-service.service';
import { AccountWebService} from './shared/webservices/account.webservice';
import { UsersWebService} from './shared/webservices/users.webservice';
import { RoomWebService} from './shared/webservices/room.webservice';
import { ReservationWebService} from './shared/webservices/reservation.webservice';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonReserveComponent } from './shared/components/button-reserve/button-reserve.component';
import { HomeChildComponent } from './home-parent/home-child/home-child.component';
import { AdminParentComponent } from './admin-parent/admin-parent.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeParentComponent,
    PracticalInfosParentComponent,
    OnDisplayParentComponent,
    ContactsParentComponent,
    QuizzParentComponent,
    AccountParentComponent,
    NewUserComponent,
    OnDisplayChildComponent,
    ButtonReserveComponent,
    HomeChildComponent,
    AdminParentComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,

    /* ANGULAR MATERIAL */
    MatInputModule,
    MatDatepickerModule,
    MatButtonModule,
    MatCardModule,
    MatSliderModule,
    MatFormFieldModule,
    MatTabsModule,
    MatButtonToggleModule,
    MatDividerModule,
    MatListModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
