import { Component, OnInit } from '@angular/core';
import { UsersService } from '../shared/webservices/users.webservice';
import { User } from '../shared/models/user.model';


@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  now = new Date();

  constructor(  private usersWebService: UsersService
    ) { }

  ngOnInit(): void {

    //Films
    this.addUser(); 
  }

  addUser() {
    const userToAdd = new User(1, "Jean", "Fichtre", this.now, "31 Rue du j'me foutre", 3);
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
