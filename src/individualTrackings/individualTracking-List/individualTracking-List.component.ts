import { Component, OnInit } from '@angular/core';

import { IndividualTrackingService } from '../shared/individualTracking.service'
import { IndividualTracking } from '../shared/individualTracking.model';
import { ToastrService } from 'ngx-toastr';   

@Component({
  selector: 'app-individualTracking-list',
  templateUrl: './individualTracking-list.component.html',
  styleUrls: ['./individualTracking-list.component.css']
})
export class IndividualTrackingListComponent implements OnInit {

  constructor(private individualTrackingService: IndividualTrackingService,private toastr : ToastrService) { }

  ngOnInit() {
    this.individualTrackingService.getIndividualTrackingList();
  }

 
}
