export class Contact {

    private id!: number;
    private firstName: string;
    private lastName: string;
    private email: string;
    private message: string;
    private dateTime : Date;

    constructor(
        firstNameParam: string,
        lastNameParam: string,
        emailParam: string,
        messageParam: string,
        dateTimeParam : Date,
        idParam?: number
        
    ) {

        this.firstName = firstNameParam;
        this.lastName = lastNameParam;
        this.email = emailParam;
        this.message = messageParam;
        this.dateTime = dateTimeParam;
        if (idParam) {
            this.id = idParam;
        }
    }

    fullName() {
        return this.id + ' ' +this.firstName + ' ' + this.lastName + ' ' +  this.email + ' ' + this.message + ' ' + this.dateTime;
    }
}

