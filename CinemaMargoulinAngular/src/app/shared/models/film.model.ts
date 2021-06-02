export class Film {
    name: string;
    duration: number;
    filmVersion: String;
    display: String;

    constructor(
        nameParam: string,
        durationParam: number,
        filmVersionParam: String,
        displayParam: String

    )
     {
        this.name = nameParam;
        this.duration = durationParam;
        this.filmVersion = filmVersionParam;
        this.display = displayParam;
       
    }

    fullName() {
        return this.name + ' ' + this.duration + ' ' +  this.filmVersion + ' ' + this.display;
    }
}
