import { Component, OnInit } from '@angular/core';
// import ham from '../../../assets/
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  apptitle = 'ANGULAR 7';
  apptitle2 = 'LEARNING A NEW SPA';
  constructor() { }

  ngOnInit() {
  }

}
