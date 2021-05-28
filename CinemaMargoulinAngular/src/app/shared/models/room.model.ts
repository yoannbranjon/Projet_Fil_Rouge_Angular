export class Room {

    id: number;
    name: string;
    sitNumber: number;
    maxCapacity: number;
    audioSystem: string;

    constructor(
        idParam: number,
        nameParam: string,
        sitNumberParam: number,
        maxCapacityParam: number,
        audioSystemParam: string,

    ) {
        this.id = idParam;
        this.name = nameParam;
        this.sitNumber =  sitNumberParam;
        this.maxCapacity = maxCapacityParam;
        this.audioSystem = audioSystemParam;
       
    }

    fullName() {
        return this.name + ' ' + this.sitNumber + ' ' +  this. maxCapacity + ' ' + this.audioSystem;
    }
}
