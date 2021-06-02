export class Film {

    name: string;
    duration: number;
    filmVersion: String;
    display: String;
    typeFilm: String;
    comment: String;
    director: String;
    pegi: number;
   

   
    constructor(
        nameParam: string,
        durationParam: number,
        filmVersionParam: String,
        displayParam: String,
        typeFilmParam: String,
        commentParam: String,
        directorParam: String,
        pegiParam: number

    )
     {
        this.name = nameParam;
        this.duration = durationParam;
        this.filmVersion = filmVersionParam;
        this.display = displayParam;
        this.typeFilm = typeFilmParam;
        this.comment = commentParam;
        this.director = directorParam;
        this.pegi = pegiParam;
       
    }

    fullName() {
        return this.name + ' ' + this.duration + ' ' +  this.filmVersion + ' ' + this.display + ' ' + this.typeFilm + ' ' + this.comment + ' ' + this.director+ ' ' + this.pegi;
    }
}