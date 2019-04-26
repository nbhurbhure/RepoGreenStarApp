import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { StandardService } from '../shared/standard.service';
import { ToastrService } from 'ngx-toastr';
import { appconstants } from 'src/common/appconstants';

@Component({
  selector: 'app-standard',
  templateUrl: './standard.component.html',
  styleUrls: ['./standard.component.css']
})
export class StandardComponent implements OnInit {
    
  constructor(private standardService: StandardService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();     
    }

  resetForm(form?: NgForm) {
    if (form != null)
    {
      form.reset();
    }
    this.standardService.selectedStandard = {
      Id: null,
      Name: '',
      SchoolName: '',
      FSchoolId: null,
    }      
    this.standardService.getSchoolList(); 
  }


  onSubmit(form: NgForm) {  
form.value.FSchoolId = appconstants.GlobalSchoolId;
    if (form.value.Id == null) {
      this.standardService.postStandard(form.value)
        .subscribe(data => {
          this.resetForm(form);
          this.standardService.getStandardList();
          this.toastr.success('New Record Added Succcessfully', 'Standard Register');
        })
    }
    else {
      this.standardService.putStandard(form.value.Id, form.value)
      .subscribe(data => {
        this.resetForm(form);
        this.standardService.getStandardList();
        this.toastr.info('Record Updated Successfully!', 'Standard Register');
      });
    }
  }

}

