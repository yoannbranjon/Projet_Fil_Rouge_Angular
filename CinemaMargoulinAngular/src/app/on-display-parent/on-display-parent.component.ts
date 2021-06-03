import { Component, OnInit } from '@angular/core';
import { Film } from '../shared/models/film.model';import { FilmWebService } from '../shared/webservices/film.webservice';

@Component({
  selector: 'app-on-display-parent',
  templateUrl: './on-display-parent.component.html',
  styleUrls: ['./on-display-parent.component.scss']
})
export class OnDisplayParentComponent implements OnInit {

  tab: Array<string> = ['premier', 'deuxieme', 'troisieme','quatrieme'];
  nord = 'Lille';
  sud = 'Marseille';
  capitale = 'Paris';

  //initialisation liste de filmms
  filmList: any[] = [];
  
  
  constructor(private filmWebService: FilmWebService) {
   }

  ngOnInit() { 

    //Films
    this.getAllFilms();
  }

  //getAll()
  getAllFilms() {

    this.filmWebService.getAllFilms().subscribe(
      (data) => {

        console.log('TestWebServiceComponent getAllFilms', data);
        this.filmList = data;
      },
        (error) => {
          console.error(error);
        }
    );
      }



}


