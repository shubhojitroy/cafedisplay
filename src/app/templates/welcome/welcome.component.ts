import { Component, OnInit } from '@angular/core';
import { pageTransition } from '../../shared/animations';
import { ICafe } from '../../models/icafe';

@Component({
  selector: 'cd-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  animations: [pageTransition]
})
export class WelcomeComponent implements OnInit {
  pageTitle = 'Cafe Shops Display';

  state = 'in';

  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredCafes = this.listFilter
      ? this.performFilter(this.listFilter)
      : this.cafes;
  }

  filteredCafes: ICafe[];
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
      cafeName: 'CBD shop of Coffee',
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
      cafeName: 'Coffee Superior',
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

  constructor() {
    this.filteredCafes = this.cafes;
    this.listFilter = '';
  }

  performFilter(filterBy: string): ICafe[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.cafes.filter(
      (cafe: ICafe) =>
        cafe.cafeName.toLocaleLowerCase().indexOf(filterBy) !== -1
    );
  }

  ngOnInit() {
    this.state = this.state === 'in' ? 'out' : 'in';
  }
}
