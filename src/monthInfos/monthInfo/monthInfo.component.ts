import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { MonthInfoService } from '../shared/monthInfo.service';
import { ToastrService } from 'ngx-toastr';
import { appconstants } from 'src/common/appconstants';

@Component({
  selector: 'app-monthInfo',
  templateUrl: './monthInfo.component.html',
  styleUrls: ['./monthInfo.component.css']
})
export class MonthInfoComponent implements OnInit {
    
  constructor(private monthInfoService: MonthInfoService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();     
    }

  resetForm(form?: NgForm) {
    if (form != null)
    {
      form.reset();
    }
    this.monthInfoService.selectedMonthInfo = {
      Id: null,
      Name: '',
      Month: null,
      YearInfoName: '',
      FYearInfoId: null,
    }      
    this.monthInfoService.getYearInfoList(); 
  }


  onSubmit(form: NgForm) {  
form.value.FYearInfoId = appconstants.GlobalYearInfoId;
    if (form.value.Id == null) {
      this.monthInfoService.postMonthInfo(form.value)
        .subscribe(data => {
          this.resetForm(form);
          this.monthInfoService.getMonthInfoList();
          this.toastr.success('New Record Added Succcessfully', 'MonthInfo Register');
        })
    }
    else {
      this.monthInfoService.putMonthInfo(form.value.Id, form.value)
      .subscribe(data => {
        this.resetForm(form);
        this.monthInfoService.getMonthInfoList();
        this.toastr.info('Record Updated Successfully!', 'MonthInfo Register');
      });
    }
  }

}

