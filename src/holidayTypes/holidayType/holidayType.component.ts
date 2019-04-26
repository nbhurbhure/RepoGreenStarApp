import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { HolidayTypeService } from '../shared/holidayType.service';
import { ToastrService } from 'ngx-toastr';
import { appconstants } from 'src/common/appconstants';

@Component({
  selector: 'app-holidayType',
  templateUrl: './holidayType.component.html',
  styleUrls: ['./holidayType.component.css']
})
export class HolidayTypeComponent implements OnInit {
    
  constructor(private holidayTypeService: HolidayTypeService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();     
    }

  resetForm(form?: NgForm) {
    if (form != null)
    {
      form.reset();
    }
    this.holidayTypeService.selectedHolidayType = {
      Id: null,
      Name: '',
    }      
  }


  onSubmit(form: NgForm) {  
    if (form.value.Id == null) {
      this.holidayTypeService.postHolidayType(form.value)
        .subscribe(data => {
          this.resetForm(form);
          this.holidayTypeService.getHolidayTypeList();
          this.toastr.success('New Record Added Succcessfully', 'HolidayType Register');
        })
    }
    else {
      this.holidayTypeService.putHolidayType(form.value.Id, form.value)
      .subscribe(data => {
        this.resetForm(form);
        this.holidayTypeService.getHolidayTypeList();
        this.toastr.info('Record Updated Successfully!', 'HolidayType Register');
      });
    }
  }

}

