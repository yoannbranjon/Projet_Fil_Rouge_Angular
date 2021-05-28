export class Account {

    id: number;
    email: string;
    password: string;

    constructor(
        idParam: number,
        emailParam: string,
        passwordParam: string,


    ) {
        this.id = idParam;
        this.email = emailParam;
        this.password = passwordParam;
       
    }

    fullName() {
        return this.email + ' ' + this.password;
    }
}
