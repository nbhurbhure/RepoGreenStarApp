import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { TeamService } from '../shared/team.service';
import { ToastrService } from 'ngx-toastr';
import { appconstants } from 'src/common/appconstants';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
    
  constructor(private teamService: TeamService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();     
    }

  resetForm(form?: NgForm) {
    if (form != null)
    {
      form.reset();
    }
    this.teamService.selectedTeam = {
      Id: null,
      Name: '',
      Status: '',
      TeamLead: null,
      StandardName: '',
      FStandardId: null,
    }      
    this.teamService.getStandardList(); 
  }


  onSubmit(form: NgForm) {  
form.value.FSchoolId = appconstants.GlobalSchoolId;
    if (form.value.Id == null) {
      this.teamService.postTeam(form.value)
        .subscribe(data => {
          this.resetForm(form);
          this.teamService.getTeamList();
          this.toastr.success('New Record Added Succcessfully', 'Team Register');
        })
    }
    else {
      this.teamService.putTeam(form.value.Id, form.value)
      .subscribe(data => {
        this.resetForm(form);
        this.teamService.getTeamList();
        this.toastr.info('Record Updated Successfully!', 'Team Register');
      });
    }
  }

}

