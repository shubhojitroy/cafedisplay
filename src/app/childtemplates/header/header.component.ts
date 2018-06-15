import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cd-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  imageSrc = './assets/images/logoimage.png';
  hrefTitle = 'LINK Realty International';
  constructor() { }

  ngOnInit() {
  }

}
