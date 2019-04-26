import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { TeacherService } from '../shared/teacher.service';
import { ToastrService } from 'ngx-toastr';
import { appconstants } from 'src/common/appconstants';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
    
  constructor(private teacherService: TeacherService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();     
    }

  resetForm(form?: NgForm) {
    if (form != null)
    {
      form.reset();
    }
    this.teacherService.selectedTeacher = {
      Id: null,
      Name: '',
      ContactInfo: '',
      ContactNo: '',
      SchoolName: '',
      FSchoolId: null,
    }      
    this.teacherService.getSchoolList(); 
  }


  onSubmit(form: NgForm) {  
form.value.FSchoolId = appconstants.GlobalSchoolId;
    if (form.value.Id == null) {
      this.teacherService.postTeacher(form.value)
        .subscribe(data => {
          this.resetForm(form);
          this.teacherService.getTeacherList();
          this.toastr.success('New Record Added Succcessfully', 'Teacher Register');
        })
    }
    else {
      this.teacherService.putTeacher(form.value.Id, form.value)
      .subscribe(data => {
        this.resetForm(form);
        this.teacherService.getTeacherList();
        this.toastr.info('Record Updated Successfully!', 'Teacher Register');
      });
    }
  }

}

