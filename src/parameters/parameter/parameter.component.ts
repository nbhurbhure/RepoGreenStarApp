import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { ParameterService } from '../shared/parameter.service';
import { ToastrService } from 'ngx-toastr';
import { appconstants } from 'src/common/appconstants';

@Component({
  selector: 'app-parameter',
  templateUrl: './parameter.component.html',
  styleUrls: ['./parameter.component.css']
})
export class ParameterComponent implements OnInit {
    
  constructor(private parameterService: ParameterService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();     
    }

  resetForm(form?: NgForm) {
    if (form != null)
    {
      form.reset();
    }
    this.parameterService.selectedParameter = {
      Id: null,
      Name: '',
      Description: '',
      SchoolName: '',
      FSchoolId: null,
    }      
    this.parameterService.getSchoolList(); 
  }


  onSubmit(form: NgForm) {  
form.value.FSchoolId = appconstants.GlobalSchoolId;
    if (form.value.Id == null) {
      this.parameterService.postParameter(form.value)
        .subscribe(data => {
          this.resetForm(form);
          this.parameterService.getParameterList();
          this.toastr.success('New Record Added Succcessfully', 'Parameter Register');
        })
    }
    else {
      this.parameterService.putParameter(form.value.Id, form.value)
      .subscribe(data => {
        this.resetForm(form);
        this.parameterService.getParameterList();
        this.toastr.info('Record Updated Successfully!', 'Parameter Register');
      });
    }
  }

}

