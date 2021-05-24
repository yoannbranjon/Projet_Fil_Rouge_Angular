import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountParentComponent } from './account-parent/account-parent.component';
import { ContactsParentComponent } from './contacts-parent/contacts-parent.component';
import { HomeParentComponent } from './home-parent/home-parent.component';
import { OnDisplayParentComponent } from './on-display-parent/on-display-parent.component';
import { PracticalInfosParentComponent } from './practical-infos-parent/practical-infos-parent.component';
import { QuizzParentComponent } from './quizz-parent/quizz-parent.component';

const routes: Routes = [
  { path: 'home', component: HomeParentComponent },
  { path: 'ondisplay', component: OnDisplayParentComponent },
  { path: 'practicalInfos', component: PracticalInfosParentComponent },
  { path: 'quizz', component: QuizzParentComponent },
  { path: 'contacts', component: ContactsParentComponent },
  { path: 'account',component: AccountParentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
