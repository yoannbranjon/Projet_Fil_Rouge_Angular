import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-on-display-child',
  templateUrl: './on-display-child.component.html',
  styleUrls: ['./on-display-child.component.scss']
})

export class OnDisplayChildComponent implements OnInit {
  @Input() ordre = '';
  @Input() villeNaissance = '';

  constructor() { }

  ngOnInit() { }
}