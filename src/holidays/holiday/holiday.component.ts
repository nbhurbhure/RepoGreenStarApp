import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { HolidayService } from '../shared/holiday.service';
import { ToastrService } from 'ngx-toastr';
import { appconstants } from 'src/common/appconstants';

@Component({
  selector: 'app-holiday',
  templateUrl: './holiday.component.html',
  styleUrls: ['./holiday.component.css']
})
export class HolidayComponent implements OnInit {
    
  constructor(private holidayService: HolidayService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();     
    }

  resetForm(form?: NgForm) {
    if (form != null)
    {
      form.reset();
    }
    this.holidayService.selectedHoliday = {
      Id: null,
      Name: '',
      HolidayTypeName: '',
      YearInfoName: '',
      MonthInfoName: '',
      DayInfoName: '',
      SchoolName: '',
      FHolidayTypeId: null,
      FYearInfoId: null,
      FMonthInfoId: null,
      FDayInfoId: null,
      FSchoolId: null,
    }      
    this.holidayService.getHolidayTypeList(); 
    this.holidayService.getYearInfoList(); 
    this.holidayService.getMonthInfoList(); 
    this.holidayService.getDayInfoList(); 
    this.holidayService.getSchoolList(); 
  }


  onSubmit(form: NgForm) {  
form.value.FSchoolId = appconstants.GlobalSchoolId;
    if (form.value.Id == null) {
      this.holidayService.postHoliday(form.value)
        .subscribe(data => {
          this.resetForm(form);
          this.holidayService.getHolidayList();
          this.toastr.success('New Record Added Succcessfully', 'Holiday Register');
        })
    }
    else {
      this.holidayService.putHoliday(form.value.Id, form.value)
      .subscribe(data => {
        this.resetForm(form);
        this.holidayService.getHolidayList();
        this.toastr.info('Record Updated Successfully!', 'Holiday Register');
      });
    }
  }

}

