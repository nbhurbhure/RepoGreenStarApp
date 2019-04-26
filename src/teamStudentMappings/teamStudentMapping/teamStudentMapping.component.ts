import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { TeamStudentMappingService } from '../shared/teamStudentMapping.service';
import { ToastrService } from 'ngx-toastr';
import { appconstants } from 'src/common/appconstants';

@Component({
  selector: 'app-teamStudentMapping',
  templateUrl: './teamStudentMapping.component.html',
  styleUrls: ['./teamStudentMapping.component.css']
})
export class TeamStudentMappingComponent implements OnInit {
    
  constructor(private teamStudentMappingService: TeamStudentMappingService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();     
    }

  resetForm(form?: NgForm) {
    if (form != null)
    {
      form.reset();
    }
    this.teamStudentMappingService.selectedTeamStudentMapping = {
      Id: null,
      TeamName: '',
      StudentName: '',
      FTeamId: null,
      FStudentId: null,
    }      
    this.teamStudentMappingService.getTeamList(); 
    this.teamStudentMappingService.getStudentList(); 
  }


  onSubmit(form: NgForm) {  
form.value.FSchoolId = appconstants.GlobalSchoolId;
    if (form.value.Id == null) {
      this.teamStudentMappingService.postTeamStudentMapping(form.value)
        .subscribe(data => {
          this.resetForm(form);
          this.teamStudentMappingService.getTeamStudentMappingList();
          this.toastr.success('New Record Added Succcessfully', 'TeamStudentMapping Register');
        })
    }
    else {
      this.teamStudentMappingService.putTeamStudentMapping(form.value.Id, form.value)
      .subscribe(data => {
        this.resetForm(form);
        this.teamStudentMappingService.getTeamStudentMappingList();
        this.toastr.info('Record Updated Successfully!', 'TeamStudentMapping Register');
      });
    }
  }

}

