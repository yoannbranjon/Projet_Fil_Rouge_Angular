export class User {
        id: number;
        firstName: string;
        lastName: string;
        birthday: Date;
        address: String;
        idAccount: number;
    
        constructor(
            idParam: number,
            firstNameParam: string,
            lastNameParam: string,
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
