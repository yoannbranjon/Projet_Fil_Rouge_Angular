export class Film {
    id: number;
    name: string;
    duration: number;
    filmVersion: String;
    display: String;

    constructor(
        idParam: number,
        nameParam: string,
        durationParam: number,
        filmVersionParam: String,
        displayParam: String

    ) {
        this.id = idParam;
        this.name = nameParam;
        this.duration = durationParam;
        this.filmVersion = filmVersionParam;
        this.display = displayParam;
       
    }

    fullName() {
        return this.name + ' ' + this.duration + ' ' +  this.filmVersion + ' ' + this.display;
    }
}
