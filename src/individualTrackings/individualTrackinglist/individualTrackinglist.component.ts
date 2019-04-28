import { Component, OnInit } from '@angular/core';

import { IndividualTrackingService } from '../shared/individualTracking.service'
import { IndividualTracking } from '../shared/individualTrackingmodel';
import { ToastrService } from 'ngx-toastr';   

@Component({
  selector: 'app-individualTracking-list',
  templateUrl: './individualTrackinglist.component.html',
  styleUrls: ['./individualTrackinglist.component.css']
})
export class IndividualTrackingListComponent implements OnInit {

  constructor(private individualTrackingService: IndividualTrackingService,private toastr : ToastrService) { }

  ngOnInit() {
    this.individualTrackingService.getIndividualTrackingList();
  }

 
}
