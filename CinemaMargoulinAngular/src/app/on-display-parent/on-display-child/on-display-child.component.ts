import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Film } from 'src/app/shared/models/film.model';
import { TransfertService } from 'src/app/shared/services/transfert.service';

@Component({
  selector: 'app-on-display-child',
  templateUrl: './on-display-child.component.html',
  styleUrls: ['./on-display-child.component.scss']
})

export class OnDisplayChildComponent {
  @Input() title = '';
  @Input() display ='';
  @Input()
  element!: Film;


  constructor(
    private transfertService: TransfertService,
    private router: Router
  ) { } 


  putIdOnLocalStorage() {

    this.transfertService.setIdSubject(this.element.id);
    this.router.navigate(['infofilm']);

   // localStorage.setItem('idFilmOnLocalStorage', this.element.id.toString());
  }
}