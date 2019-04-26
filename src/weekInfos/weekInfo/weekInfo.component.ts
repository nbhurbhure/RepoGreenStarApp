import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { WeekInfoService } from '../shared/weekInfo.service';
import { ToastrService } from 'ngx-toastr';
import { appconstants } from 'src/common/appconstants';

@Component({
  selector: 'app-weekInfo',
  templateUrl: './weekInfo.component.html',
  styleUrls: ['./weekInfo.component.css']
})
export class WeekInfoComponent implements OnInit {
    
  constructor(private weekInfoService: WeekInfoService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();     
    }

  resetForm(form?: NgForm) {
    if (form != null)
    {
      form.reset();
    }
    this.weekInfoService.selectedWeekInfo = {
      Id: null,
      Name: '',
      WorkingDay: null,
      FSchoolId: null,
    }      
    this.weekInfoService.getSchoolList(); 
  }


  onSubmit(form: NgForm) {  
form.value.FSchoolId = appconstants.GlobalSchoolId;
    if (form.value.Id == null) {
      this.weekInfoService.postWeekInfo(form.value)
        .subscribe(data => {
          this.resetForm(form);
          this.weekInfoService.getWeekInfoList();
          this.toastr.success('New Record Added Succcessfully', 'WeekInfo Register');
        })
    }
    else {
      this.weekInfoService.putWeekInfo(form.value.Id, form.value)
      .subscribe(data => {
        this.resetForm(form);
        this.weekInfoService.getWeekInfoList();
        this.toastr.info('Record Updated Successfully!', 'WeekInfo Register');
      });
    }
  }

}

