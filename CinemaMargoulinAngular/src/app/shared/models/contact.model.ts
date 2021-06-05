export class Contact {

    private id!: number;
    private firstName: string;
    private lastName: string;
    private email: string;
    private message: string;

    constructor(
        firstNameParam: string,
        lastNameParam: string,
        emailParam: string,
        messageParam: string,
        idParam?: number
    ) {

        this.firstName = firstNameParam;
        this.lastName = lastNameParam;
        this.email = emailParam;
        this.message = messageParam;
        if (idParam) {
            this.id = idParam;
        }
    }

    fullName() {
        return this.firstName + ' ' + this.lastName + ' ' +  this.email + ' ' + this.message;
    }
}

