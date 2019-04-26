import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { VolunteerService } from '../shared/volunteer.service';
import { ToastrService } from 'ngx-toastr';
import { appconstants } from 'src/common/appconstants';

@Component({
  selector: 'app-volunteer',
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.css']
})
export class VolunteerComponent implements OnInit {
    
  constructor(private volunteerService: VolunteerService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();     
    }

  resetForm(form?: NgForm) {
    if (form != null)
    {
      form.reset();
    }
    this.volunteerService.selectedVolunteer = {
      Id: null,
      Name: '',
      Email: '',
      VPassword: '',
      VroleName: '',
      SchoolName: '',
      FVroleId: null,
      FSchoolId: null,
    }      
    this.volunteerService.getVroleList(); 
    this.volunteerService.getSchoolList(); 
  }


  onSubmit(form: NgForm) {  
    if (form.value.Id == null) {
      this.volunteerService.postVolunteer(form.value)
        .subscribe(data => {
          this.resetForm(form);
          this.volunteerService.getVolunteerList();
          this.toastr.success('New Record Added Succcessfully', 'Volunteer Register');
        })
    }
    else {
      this.volunteerService.putVolunteer(form.value.Id, form.value)
      .subscribe(data => {
        this.resetForm(form);
        this.volunteerService.getVolunteerList();
        this.toastr.info('Record Updated Successfully!', 'Volunteer Register');
      });
    }
  }

}

