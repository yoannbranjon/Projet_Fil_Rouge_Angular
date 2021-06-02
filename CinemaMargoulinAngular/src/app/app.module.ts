import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

/******* ROUTES *******/
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


/******* ROUTES *******/
import { HomeParentComponent } from './home-parent/home-parent.component';
import { PracticalInfosParentComponent } from './practical-infos-parent/practical-infos-parent.component';
import { OnDisplayParentComponent } from './on-display-parent/on-display-parent.component';
import { ContactsParentComponent } from './contacts-parent/contacts-parent.component';
import { QuizzParentComponent } from './quizz-parent/quizz-parent.component';
import { AccountParentComponent } from './account-parent/account-parent.component';
import { NewUserComponent } from './new-user/new-user.component';
import { AdminParentComponent } from './admin-parent/admin-parent.component';

/******* ANGULAR MATERIAL ********/ 
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatTableModule } from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';

/******* SERVICES *******/
import { FilmWebService } from './shared/webservices/film.webservice';
import { FilmServiceService } from './shared/services/film-service.service';
import { AccountWebService} from './shared/webservices/account.webservice';
import { UsersWebService} from './shared/webservices/users.webservice';
import { RoomWebService} from './shared/webservices/room.webservice';
import { ReservationWebService} from './shared/webservices/reservation.webservice';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



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
    AdminParentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,

    /* ANGULAR MATERIAL */
    MatInputModule,
    MatDatepickerModule,
    MatTableModule,
    MatButtonModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
