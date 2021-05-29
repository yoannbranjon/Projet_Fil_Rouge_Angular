import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-on-display-parent',
  templateUrl: './on-display-parent.component.html',
  styleUrls: ['./on-display-parent.component.scss']
})
export class OnDisplayParentComponent implements OnInit {

  data: Array<any>;
  
  constructor(){
    this.data = [
        { firstName: 'John', lastName: 'Doe', age: '35' },
        { firstName: 'Michael', lastName: 'Smith', age: '39' },
        { firstName: 'Michael', lastName: 'Jordan', age: '45' },
        { firstName: 'Tanya', lastName: 'Blake', age: '47' }
    ];
}

  ngOnInit(): void {
  }

}
