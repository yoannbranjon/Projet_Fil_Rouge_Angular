export class Room {

    id!: number;
    name: string;
    sitNumber: number;
    maxCapacity: number;
    audioSystem: string;

    constructor(
        nameParam: string,
        sitNumberParam: number,
        maxCapacityParam: number,
        audioSystemParam: string,
        idParam?: number,

    ) {
        this.name = nameParam;
        this.sitNumber =  sitNumberParam;
        this.maxCapacity = maxCapacityParam;
        this.audioSystem = audioSystemParam;
        if (idParam) {
            this.id = idParam;
        }
       
    }

    fullName() {
        return this.name + ' ' + this.sitNumber + ' ' +  this. maxCapacity + ' ' + this.audioSystem;
    }
}
