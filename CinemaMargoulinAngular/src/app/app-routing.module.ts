import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountParentComponent } from './account-parent/account-parent.component';
import { ContactsParentComponent } from './contacts-parent/contacts-parent.component';
import { HomeParentComponent } from './home-parent/home-parent.component';
import { OnDisplayParentComponent } from './on-display-parent/on-display-parent.component';
import { PracticalInfosParentComponent } from './practical-infos-parent/practical-infos-parent.component';
import { QuizzParentComponent } from './quizz-parent/quizz-parent.component';
import { NewUserComponent } from './new-user/new-user.component';
import { AdminParentComponent } from './admin-parent/admin-parent.component';
import { ReservationParentComponent } from './reservation-parent/reservation-parent.component';
import { InfoFilmComponent } from './info-film/info-film.component';

const routes: Routes = [
  { path: 'home', component: HomeParentComponent },
  { path: 'ondisplay', component: OnDisplayParentComponent },
  { path: 'practicalInfos', component: PracticalInfosParentComponent },
  { path: 'quizz', component: QuizzParentComponent },
  { path: 'contacts', component: ContactsParentComponent },
  { path: 'account',component: AccountParentComponent},
  { path: 'new-user',component: NewUserComponent},
  { path: 'admin',component: AdminParentComponent},
  { path: 'reservation',component: ReservationParentComponent},
  { path: 'infofilm', component: InfoFilmComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
