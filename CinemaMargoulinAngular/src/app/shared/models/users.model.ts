import {Account} from './account.model';

export class Users {
        id!: number;
        firstName: string;
        lastName: string;
        account: Account;
        birthday: Date;
        address: String;
        postalCode: number;
        city: String;
    
        constructor(
            firstNameParam: string,
            lastNameParam: string,
            accountParam: Account,
            birthdayParam: Date,
            addressParam: String,
            postalCodeParam: number,
            cityParam: String,
            idParam?: number,
    
        ) {
            this.firstName = firstNameParam;
            this.lastName = lastNameParam;
            this.account = accountParam;
            this.birthday = birthdayParam;
            this.address = addressParam;
            this.postalCode = postalCodeParam;
            this.city = cityParam;
            if (idParam) {
                this.id = idParam;
            }
           
        }
    
        fullName() {
            return this.firstName + ' ' + this.lastName + ' ' + this.account + ' ' +  this.birthday + ' ' + this.address + ' ' + this.postalCode + ' ' + this.city;
        }
}
