import { Component, OnInit } from '@angular/core';
import { pageTransition } from '../../shared/animations';
import { ICafe } from '../../models/icafe';

@Component({
  selector: 'cd-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  animations: [ pageTransition ]
})
export class WelcomeComponent implements OnInit {

  pageTitle = 'Cafe Shops Display';

  state = 'in';

  cafes: ICafe[] = [
    {
      cafeID: 1,
      cafeName: 'CBD coffee shop',
      owner: 'Jhon Doe',
      openTime: '07:00 am',
      closeTime: '03:00 pm',
      dayOfTheWeek: 'Monday - Friday'
    },
    {
      cafeID: 2,
      cafeName: 'CBD shop of Coffeee',
      owner: 'Jane Bloggs',
      openTime: '07:00 am',
      closeTime: '03:00 pm',
      dayOfTheWeek: 'Monday - Wednesday'
    },
    {
      cafeID: 3,
      cafeName: 'Casa de Cafe',
      owner: 'Alehandro Seneior',
      openTime: '07:00 am',
      closeTime: '11:00 am',
      dayOfTheWeek: 'Monday - Tuesday'
    },
    {
      cafeID: 4,
      cafeName: 'Coffeee Superior',
      owner: 'Clark Gabel',
      openTime: '07:00 am',
      closeTime: '01:00 pm',
      dayOfTheWeek: 'Monday - Wednesday'
    },
    {
      cafeID: 5,
      cafeName: 'Manana Cafe',
      owner: 'Sid Butler',
      openTime: '10:00 am',
      closeTime: '04:00 pm',
      dayOfTheWeek: 'Monday - Friday'
    }
  ];

  constructor() { }

  ngOnInit() {
    this.state = (this.state === 'in' ? 'out' : 'in');
  }

}
