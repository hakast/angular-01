import { Component, OnInit  } from '@angular/core';
import { FormdataService } from '../../formdata.service';

interface Alert {
  type: string;
  message: string;
}

const ALERTS: Alert[] = [{
  type: 'primary',
  message: 'THIS PAGE IS UNDER CONSTRUCTION!',
}
];


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  alerts: Alert[];

  constructor(private data: FormdataService) { 
  this.reset();
  }

    close(alert: Alert) {
      this.alerts.splice(this.alerts.indexOf(alert), 1);
    }

    reset() {
      this.alerts = Array.from(ALERTS);
    }


  ngOnInit() {
    
  }
}
