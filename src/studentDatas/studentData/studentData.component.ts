import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { StudentDataService } from '../shared/studentData.service';
import { ToastrService } from 'ngx-toastr';
import { appconstants } from 'src/common/appconstants';

@Component({
  selector: 'app-studentData',
  templateUrl: './studentData.component.html',
  styleUrls: ['./studentData.component.css']
})
export class StudentDataComponent implements OnInit {
  
  constructor(private studentDataService: StudentDataService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();     
    }

  resetForm(form?: NgForm) {
    if (form != null)
    {
      form.reset();
    }
    this.studentDataService.selectedStudentData = {
      Id: null,
      Name: '',
      StudentStatus: '',
      YearInfoName: '',
      MonthInfoName: '',
      DayInfoName: '',
      StudentName: '',
      ParameterName: '',
      FYearInfoId: null,
      FMonthInfoId: null,
      FDayInfoId: null,
      FStudentId: null,
      FParameterId: null,
      YearName: null,
      MonthName: null,
      DayName: null
    }      
    this.studentDataService.getYearInfoList(); 
    this.studentDataService.getMonthInfoList(); 
    this.studentDataService.getDayInfoList(); 
    this.studentDataService.getStudentList(); 
    this.studentDataService.getParameterList(); 
  }

  OnYearInfoChange(event)
  {
    this.studentDataService.objFilteredMonthInfoList = this.studentDataService.objMonthInfoList.filter(r=>r.FYearInfoId==event)  
    this.studentDataService.selectedStudentData.FDayInfoId = null;
  }

  OnMonthInfoChange(event)
 {
   this.studentDataService.objFilteredDayInfoList = this.studentDataService.objDayInfoList.filter(r=>r.FMonthInfoId==event)    
 }
 
  onSubmit(form: NgForm) {  
form.value.FSchoolId = appconstants.GlobalSchoolId;
    if (form.value.Id == null) {
      this.studentDataService.postStudentData(form.value)
        .subscribe(data => {
          this.resetForm(form);
          this.studentDataService.getStudentDataList();
          this.toastr.success('New Record Added Succcessfully', 'StudentData Register');
        })
    }
    else {
      this.studentDataService.putStudentData(form.value.Id, form.value)
      .subscribe(data => {
        this.resetForm(form);
        this.studentDataService.getStudentDataList();
        this.toastr.info('Record Updated Successfully!', 'StudentData Register');
      });
    }
  }
}

