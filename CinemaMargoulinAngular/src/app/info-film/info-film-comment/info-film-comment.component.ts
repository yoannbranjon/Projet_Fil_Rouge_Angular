import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-film-comment',
  templateUrl: './info-film-comment.component.html',
  styleUrls: ['./info-film-comment.component.scss']
})
export class InfoFilmCommentComponent implements OnInit {
  panelOpenState = false;
  
  constructor() { }

  ngOnInit(): void {
  }

}
