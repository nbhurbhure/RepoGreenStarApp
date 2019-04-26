import { Component, OnInit } from '@angular/core';

import {IndividualTrackingService} from './shared/individualTracking.service'
@Component({
  selector: 'app-individualTrackings',
  templateUrl: './individualTrackings.component.html',
  styleUrls: ['./individualTrackings.component.css'],
  providers:[IndividualTrackingService]
})
export class IndividualTrackingsComponent implements OnInit {

  constructor(private individualTrackingService : IndividualTrackingService) { }

  ngOnInit() {
  }

}
