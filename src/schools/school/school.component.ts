import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { SchoolService } from '../shared/school.service';
import { ToastrService } from 'ngx-toastr';
import { appconstants } from 'src/common/appconstants';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent implements OnInit {
    
  constructor(private schoolService: SchoolService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();     
    }

  resetForm(form?: NgForm) {
    if (form != null)
    {
      form.reset();
    }
    this.schoolService.selectedSchool = {
      Id: null,
      Name: '',
      Address: '',
      ContactNo: '',
      Principal: '',
      CityName: '',
      FCityId: null,
    }      
    this.schoolService.getCityList(); 
  }


  onSubmit(form: NgForm) {  
    if (form.value.Id == null) {
      this.schoolService.postSchool(form.value)
        .subscribe(data => {
          this.resetForm(form);
          this.schoolService.getSchoolList();
          this.toastr.success('New Record Added Succcessfully', 'School Register');
        })
    }
    else {
      this.schoolService.putSchool(form.value.Id, form.value)
      .subscribe(data => {
        this.resetForm(form);
        this.schoolService.getSchoolList();
        this.toastr.info('Record Updated Successfully!', 'School Register');
      });
    }
  }

}

