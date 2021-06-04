import {Session} from './session.model';
import {Users} from './users.model';


export class Reservation {

    id!: number;
    name: string;
    price: number;
    session: Session;
    users: Users;
    seatNumber: number;

    constructor(
        nameParam: string,
        priceParam: number,
        sessionParam: Session,
        userParam: Users,
        seatNumberParam: number,
        idParam?: number,

    ) {
        this.name = nameParam;
        this.price =  priceParam;
        this.session = sessionParam;
        this.users = userParam;
        this.seatNumber = seatNumberParam;
        if (idParam) {
            this.id = idParam;
        }
       
    }

    fullName() {
        return this.name + ' ' + this.price + ' ' +  this.session + ' ' + this.users+ ' ' + this.seatNumber;
    }
}
