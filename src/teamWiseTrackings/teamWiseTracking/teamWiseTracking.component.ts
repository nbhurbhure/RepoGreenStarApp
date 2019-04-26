import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { TeamWiseTrackingService } from '../shared/teamWiseTracking.service';
import { ToastrService } from 'ngx-toastr';
import { appconstants } from 'src/common/appconstants';

@Component({
  selector: 'app-teamWiseTracking',
  templateUrl: './teamWiseTracking.component.html',
  styleUrls: ['./teamWiseTracking.component.css']
})
export class TeamWiseTrackingComponent implements OnInit {
    
  constructor(private teamWiseTrackingService: TeamWiseTrackingService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();     
    }

  resetForm(form?: NgForm) {
    if (form != null)
    {
      form.reset();
    }
    this.teamWiseTrackingService.selectedTeamWiseTracking = {
      Id: null,
      TeamNam: '',
      ParameterNam: '',
      StudentStatus: '',
    }      
  }


  onSubmit(form: NgForm) {  
    if (form.value.Id == null) {
      this.teamWiseTrackingService.postTeamWiseTracking(form.value)
        .subscribe(data => {
          this.resetForm(form);
          this.teamWiseTrackingService.getTeamWiseTrackingList();
          this.toastr.success('New Record Added Succcessfully', 'TeamWiseTracking Register');
        })
    }
    else {
      this.teamWiseTrackingService.putTeamWiseTracking(form.value.Id, form.value)
      .subscribe(data => {
        this.resetForm(form);
        this.teamWiseTrackingService.getTeamWiseTrackingList();
        this.toastr.info('Record Updated Successfully!', 'TeamWiseTracking Register');
      });
    }
  }

}

