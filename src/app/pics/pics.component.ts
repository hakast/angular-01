import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pics',
  templateUrl: './pics.component.html',
  styleUrls: ['./pics.component.scss']
})
export class PicsComponent implements OnInit {
  test () {
    console.log('skit')
      // <img [src]="../../assets/gallery/bild_1.jpg">
  }

  constructor() { }

  ngOnInit() {
  }

}
