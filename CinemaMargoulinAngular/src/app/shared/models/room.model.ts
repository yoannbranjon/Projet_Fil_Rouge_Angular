export class Room {

    id!: number;
    name: string;
    seatNumber: number;
    maxCapacity: number;
    audioSystem: string;

    constructor(
        nameParam: string,
        seatNumberParam: number,
        maxCapacityParam: number,
        audioSystemParam: string,
        idParam?: number,

    ) {
        this.name = nameParam;
        this.seatNumber =  seatNumberParam;
        this.maxCapacity = maxCapacityParam;
        this.audioSystem = audioSystemParam;
        if (idParam) {
            this.id = idParam;
        }
       
    }

    fullName() {
        return this.name + ' ' + this.seatNumber + ' ' +  this. maxCapacity + ' ' + this.audioSystem;
    }
}
