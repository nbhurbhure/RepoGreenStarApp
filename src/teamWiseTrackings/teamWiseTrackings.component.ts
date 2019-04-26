import { Component, OnInit } from '@angular/core';

import {TeamWiseTrackingService} from './shared/teamWiseTracking.service'
@Component({
  selector: 'app-teamWiseTrackings',
  templateUrl: './teamWiseTrackings.component.html',
  styleUrls: ['./teamWiseTrackings.component.css'],
  providers:[TeamWiseTrackingService]
})
export class TeamWiseTrackingsComponent implements OnInit {

  constructor(private teamWiseTrackingService : TeamWiseTrackingService) { }

  ngOnInit() {
  }

}
