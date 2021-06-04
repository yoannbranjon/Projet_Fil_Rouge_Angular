import {Film} from './film.model';
import {Room} from './room.model';

export class Session {

    id!: number;
    film: Film;
    room: Room;
    dateTime: Date;

    constructor(
        filmParam: Film,
        roomParam: Room,
        dateTimeParam: Date,
        idParam?: number,

    ) {
        this.film = filmParam;
        this.room =  roomParam;
        this.dateTime = dateTimeParam;
        if (idParam) {
            this.id = idParam;
        }
       
    }

    fullName() {
        return this.id + ' ' + this.film + ' ' +  this. room + ' ' + this.dateTime;
    }
}
