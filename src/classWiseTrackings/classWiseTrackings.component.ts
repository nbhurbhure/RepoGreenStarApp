import { Component, OnInit } from '@angular/core';

import {ClassWiseTrackingService} from './shared/classWiseTracking.service'
@Component({
  selector: 'app-classWiseTrackings',
  templateUrl: './classWiseTrackings.component.html',
  styleUrls: ['./classWiseTrackings.component.css'],
  providers:[ClassWiseTrackingService]
})
export class ClassWiseTrackingsComponent implements OnInit {

  constructor(private classWiseTrackingService : ClassWiseTrackingService) { }

  ngOnInit() {
  }

}
