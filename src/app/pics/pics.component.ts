import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-pics',
  templateUrl: './pics.component.html',
  styleUrls: ['./pics.component.scss']
})


export class PicsComponent implements OnInit {
  users: Object;

  constructor(private data: DataService) { 

  }

  ngOnInit() {
    this.data.getImages().subscribe(data => {
      this.users = data
      // console.log(this.users);
    }
    );

  }
}
