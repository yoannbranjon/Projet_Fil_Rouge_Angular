export class Account {

    id!: number;
    email: string;
    password: string;

    constructor(
        emailParam: string,
        passwordParam: string,
        idParam?: number


    ) {
        
        this.email = emailParam;
        this.password = passwordParam;
        if (idParam) {
            this.id = idParam;
        }
       
    }

    fullName() {
        return this.email + ' ' + this.password;
    }
}
