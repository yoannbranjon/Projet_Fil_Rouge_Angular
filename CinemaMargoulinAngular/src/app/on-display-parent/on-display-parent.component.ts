import { Component, OnInit } from '@angular/core';

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
  
  
  constructor() { }
  
  ngOnInit() { }
}

