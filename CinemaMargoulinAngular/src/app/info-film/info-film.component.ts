import { Component, OnInit } from '@angular/core';
import { Film } from '../shared/models/film.model';
import { TransfertService } from '../shared/services/transfert.service';
import { FilmWebService } from '../shared/webservices/film.webservice';

@Component({
  selector: 'app-info-film',
  templateUrl: './info-film.component.html',
  styleUrls: ['./info-film.component.scss']
})
export class InfoFilmComponent implements OnInit {

  idToCatch!: number;
  film = new Film("", 0, "", "", "", "", "", "", 0);
  title ='';
  display : String ='';
  synopsis : String ='';
  director : String='';

  constructor(
    private transfertService: TransfertService,
    private filmWebService: FilmWebService) { }

  ngOnInit() {

    this.transfertService.getIdSubject().subscribe(
      id => this.idToCatch = id
    );
    this.getFilmById();

  }

  getFilmById() {

    this.filmWebService.getFilmById(this.idToCatch).subscribe(
      (data) => {
        this.film = data;
        console.log('TestWebServiceComponent getFilmById', data);
        this.title = this.film.name;
        this.display = this.film.display;
        this.synopsis = this.film.synopsis;
        this.director = this.film.director;
      },
        (error) => {
          console.error(error);
        }
    );
    
  }
}
