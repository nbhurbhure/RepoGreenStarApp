import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { YearInfoService } from '../shared/yearInfo.service';
import { ToastrService } from 'ngx-toastr';
import { appconstants } from 'src/common/appconstants';

@Component({
  selector: 'app-yearInfo',
  templateUrl: './yearInfo.component.html',
  styleUrls: ['./yearInfo.component.css']
})
export class YearInfoComponent implements OnInit {
    
  constructor(private yearInfoService: YearInfoService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();     
    }

  resetForm(form?: NgForm) {
    if (form != null)
    {
      form.reset();
    }
    this.yearInfoService.selectedYearInfo = {
      Id: null,
      Name: '',
    }      
  }


  onSubmit(form: NgForm) {  
    if (form.value.Id == null) {
      this.yearInfoService.postYearInfo(form.value)
        .subscribe(data => {
          this.resetForm(form);
          this.yearInfoService.getYearInfoList();
          this.toastr.success('New Record Added Succcessfully', 'YearInfo Register');
        })
    }
    else {
      this.yearInfoService.putYearInfo(form.value.Id, form.value)
      .subscribe(data => {
        this.resetForm(form);
        this.yearInfoService.getYearInfoList();
        this.toastr.info('Record Updated Successfully!', 'YearInfo Register');
      });
    }
  }

}

