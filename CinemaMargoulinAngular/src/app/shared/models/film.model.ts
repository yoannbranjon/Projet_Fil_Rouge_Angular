export class Film {

    name: string;
    duration: number;
    filmVersion: String;
    display: String;
    typeFilm: String;
    synopsis: String;
    userComment: String;
    director: String;
    pegi: number;
   

   
    constructor(
        nameParam: string,
        durationParam: number,
        filmVersionParam: String,
        displayParam: String,
        typeFilmParam: String,
        synopsisParam: String,
        userCommentParam: String,
        directorParam: String,
        pegiParam: number

    )
     {
        this.name = nameParam;
        this.duration = durationParam;
        this.filmVersion = filmVersionParam;
        this.display = displayParam;
        this.typeFilm = typeFilmParam;
        this.synopsis = synopsisParam;
        this.userComment = userCommentParam;
        this.director = directorParam;
        this.pegi = pegiParam;
       
    }

    fullName() {
        return this.name + ' ' + this.duration + ' ' +  this.filmVersion + ' ' + this.display + ' ' + this.typeFilm + ' ' + this.synopsis + ' ' + this.userComment + this.director+ ' ' + this.pegi;
    }
}