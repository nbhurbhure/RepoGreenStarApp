import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { StudentService } from '../shared/student.service';
import { ToastrService } from 'ngx-toastr';
import { appconstants } from 'src/common/appconstants';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
    
  constructor(private studentService: StudentService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();     
    }

  resetForm(form?: NgForm) {
    if (form != null)
    {
      form.reset();
    }
    this.studentService.selectedStudent = {
      Id: null,
      Name: '',
      RollNo: '',
      Caste: '',
      SectionName: '',
      FSectionId: null,
    }      
    this.studentService.getSectionList(); 
  }


  onSubmit(form: NgForm) {  
form.value.FSchoolId = appconstants.GlobalSchoolId;
    if (form.value.Id == null) {
      this.studentService.postStudent(form.value)
        .subscribe(data => {
          this.resetForm(form);
          this.studentService.getStudentList();
          this.toastr.success('New Record Added Succcessfully', 'Student Register');
        })
    }
    else {
      this.studentService.putStudent(form.value.Id, form.value)
      .subscribe(data => {
        this.resetForm(form);
        this.studentService.getStudentList();
        this.toastr.info('Record Updated Successfully!', 'Student Register');
      });
    }
  }

}

