export class Users {
        id: number;
        firstName: string;
        lastName: number;
        birthday: Date;
        address: String;
        idAccount: number;
    
        constructor(
            idParam: number,
            firstNameParam: string,
            lastNameParam: number,
            birthdayParam: Date,
            addressParam: String,
            idAccountParam: number
    
        ) {
            this.id = idParam;
            this.firstName = firstNameParam;
            this.lastName = lastNameParam;
            this.birthday = birthdayParam;
            this.address = addressParam;
            this.idAccount = idAccountParam;
           
        }
    
        fullName() {
            return this.firstName + ' ' + this.lastName + ' ' +  this.birthday + ' ' + this.address + ' ' + this.idAccount;
        }
}
