export class Reservation {

    id: number;
    name: string;
    price: number;
    idSession: number;
    idUser: number;
    idAccount: number;

    constructor(
        idParam: number,
        nameParam: string,
        priceParam: number,
        idSessionParam: number,
        idUserParam: number,
        idAccountParam: number

    ) {
        this.id = idParam;
        this.name = nameParam;
        this.price =  priceParam;
        this.idSession = idSessionParam;
        this.idUser = idUserParam;
        this.idAccount = idAccountParam;
       
    }

    fullName() {
        return this.name + ' ' + this.price + ' ' +  this.idSession + ' ' + this.idUser+ ' ' + this.idAccount;
    }
}
