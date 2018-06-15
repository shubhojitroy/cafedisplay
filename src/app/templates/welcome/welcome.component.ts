import { Component, OnInit } from '@angular/core';
import { pageTransition } from '../../shared/animations';

@Component({
  selector: 'cd-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  animations: [ pageTransition ]
})
export class WelcomeComponent implements OnInit {

  pageTitle = 'Date Selection';

  state = 'in';
  constructor() { }

  ngOnInit() {
    this.state = (this.state === 'in' ? 'out' : 'in');
  }

}
