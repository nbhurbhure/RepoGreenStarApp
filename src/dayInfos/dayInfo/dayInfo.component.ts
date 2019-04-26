import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { DayInfoService } from '../shared/dayInfo.service';
import { ToastrService } from 'ngx-toastr';
import { appconstants } from 'src/common/appconstants';

@Component({
  selector: 'app-dayInfo',
  templateUrl: './dayInfo.component.html',
  styleUrls: ['./dayInfo.component.css']
})
export class DayInfoComponent implements OnInit {
    
  constructor(private dayInfoService: DayInfoService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();     
    }

  resetForm(form?: NgForm) {
    if (form != null)
    {
      form.reset();
    }
    this.dayInfoService.selectedDayInfo = {
      Id: null,
      Name: '',
      Day: null,
      MonthInfoName: '',
      FMonthInfoId: null,
    }      
    this.dayInfoService.getMonthInfoList(); 
  }


  onSubmit(form: NgForm) {  
form.value.FYearInfoId = appconstants.GlobalYearInfoId;
    if (form.value.Id == null) {
      this.dayInfoService.postDayInfo(form.value)
        .subscribe(data => {
          this.resetForm(form);
          this.dayInfoService.getDayInfoList();
          this.toastr.success('New Record Added Succcessfully', 'DayInfo Register');
        })
    }
    else {
      this.dayInfoService.putDayInfo(form.value.Id, form.value)
      .subscribe(data => {
        this.resetForm(form);
        this.dayInfoService.getDayInfoList();
        this.toastr.info('Record Updated Successfully!', 'DayInfo Register');
      });
    }
  }

}

