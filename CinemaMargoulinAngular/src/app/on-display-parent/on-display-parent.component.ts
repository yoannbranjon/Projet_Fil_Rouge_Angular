import { Component, OnInit } from '@angular/core';
import { Film } from '../shared/models/film.model';
import { FilmWebService } from '../shared/webservices/film.webservice';

@Component({
  selector: 'app-on-display-parent',
  templateUrl: './on-display-parent.component.html',
  styleUrls: ['./on-display-parent.component.scss']
})
export class OnDisplayParentComponent implements OnInit {

  //initialisation liste de filmms
  filmList: any[] = [];
  titleList: string[] = [];
  displayList : string [] = [];
  idList : number [] = [];

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

        for (let i=0; i<data.length;i++){
          this.filmList[i] = data[i];
          console.log('TestWebServiceComponent getAllFilms', this.filmList[i]);
          this.titleList = this.filmList[i].name;
          this.displayList = this.filmList[i].display;
          this.idList = this.filmList[i].id;
          console.log (this.idList, this.titleList, this.displayList);
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }
}


