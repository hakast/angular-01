import { Component, OnInit  } from '@angular/core';
import { FormdataService } from '../formdata.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private data: FormdataService) { }

  ngOnInit() {
    
  }
}
