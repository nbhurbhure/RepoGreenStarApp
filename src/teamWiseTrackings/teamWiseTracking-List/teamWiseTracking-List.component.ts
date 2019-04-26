import { Component, OnInit } from '@angular/core';

import { TeamWiseTrackingService } from '../shared/teamWiseTracking.service'
import { TeamWiseTracking } from '../shared/teamWiseTracking.model';
import { ToastrService } from 'ngx-toastr';   

@Component({
  selector: 'app-teamWiseTracking-list',
  templateUrl: './teamWiseTracking-list.component.html',
  styleUrls: ['./teamWiseTracking-list.component.css']
})
export class TeamWiseTrackingListComponent implements OnInit {

  constructor(private teamWiseTrackingService: TeamWiseTrackingService,private toastr : ToastrService) { }

  ngOnInit() {
    this.teamWiseTrackingService.getTeamWiseTrackingList();
  }

  showForEdit(objTeamWiseTracking: TeamWiseTracking) {    
    this.teamWiseTrackingService.selectedTeamWiseTracking = Object.assign({}, objTeamWiseTracking);
    if(this.teamWiseTrackingService.selectedTeamWiseTracking.Id != null)
    {
    } 
  }

  onDelete(id: number) {    
    if (confirm('Are you sure to delete this record ?') == true) {
      this.teamWiseTrackingService.deleteTeamWiseTracking(id)
      .subscribe(x => {
        this.teamWiseTrackingService.getTeamWiseTrackingList();
        this.toastr.warning("Deleted Successfully","TeamWiseTracking Register");
      })
    }
  }
}
