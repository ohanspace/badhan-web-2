import { Component, OnInit } from '@angular/core';

import { SpinnerComponent } from '../shared/spinner';

@Component({
  moduleId: module.id,
  selector: 'home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  directives: [SpinnerComponent]
})
export class HomeComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
