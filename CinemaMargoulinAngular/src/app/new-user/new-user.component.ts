import { Component, OnInit } from '@angular/core';
import { UsersWebService } from '../shared/webservices/users.webservice';
import { Users } from '../shared/models/users.model';
import { Account } from '../shared/models/account.model';


@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  now = new Date();
  account = new Account("nezha_b@gmail.com", "biss");

  constructor(  private usersWebService: UsersWebService
    ) { }

  ngOnInit(): void {

    //Films
    this.addUser(); 
  }

  addUser() {
    const userToAdd = new Users("Bébert", "Fichtre", this.account, this.now, "31 Rue du j'me foutre", 5524, "Paris");
    this.usersWebService.addUser(userToAdd).subscribe(
      (data) => {
        // getAccount Next
         console.log('TestWebServiceComponent addUser', data);
          }, (error) => {
            console.error(error);
          }
        );
      }

}
