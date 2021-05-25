import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

/******* ROUTES *******/
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeParentComponent } from './home-parent/home-parent.component';
import { PracticalInfosParentComponent } from './practical-infos-parent/practical-infos-parent.component';
import { OnDisplayParentComponent } from './on-display-parent/on-display-parent.component';
import { ContactsParentComponent } from './contacts-parent/contacts-parent.component';
import { QuizzParentComponent } from './quizz-parent/quizz-parent.component';
import { AccountParentComponent } from './account-parent/account-parent.component';

/******* SERVICES *******/
import { FilmWebService } from './shared/webservices/film.webservice';
import { FilmServiceService } from './shared/services/film-service.service'


@NgModule({
  declarations: [
    AppComponent,
    HomeParentComponent,
    PracticalInfosParentComponent,
    OnDisplayParentComponent,
    ContactsParentComponent,
    QuizzParentComponent,
    AccountParentComponent,
    //FilmServiceService,
   //FilmWebService
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }