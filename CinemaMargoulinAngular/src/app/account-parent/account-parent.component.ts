import { Component, OnInit } from '@angular/core';
import { FilmWebService } from '../shared/webservices/film.webservice';
import { Film } from '../shared/models/film.model';

@Component({
  selector: 'app-account-parent',
  templateUrl: './account-parent.component.html',
  styleUrls: ['./account-parent.component.scss']
})
export class AccountParentComponent implements OnInit {
  filmList: any[] = [];

  constructor(
    private filmWebService: FilmWebService

  ) { }

  ngOnInit() {

    //Films
    this.getAllFilms();
  }

  getAllFilms() {

    this.filmWebService.getAllFilms().subscribe(
      (data) => {

        //getAllFilms Next
        console.log('TestWebServiceComponent getAllFilms', data);
        this.filmList = data;},
        (error) => {
          console.error(error);
        }
    );
      }


}
