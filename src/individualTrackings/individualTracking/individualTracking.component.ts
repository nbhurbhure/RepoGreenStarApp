import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { IndividualTrackingService } from '../shared/individualTracking.service';
import { ToastrService } from 'ngx-toastr';
import { appconstants } from 'src/common/appconstants';

@Component({
  selector: 'app-individualTracking',
  templateUrl: './individualTracking.component.html',
  styleUrls: ['./individualTracking.component.css']
})
export class IndividualTrackingComponent implements OnInit {
    
  constructor(private individualTrackingService: IndividualTrackingService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();     
    }

  resetForm(form?: NgForm) {
    if (form != null)
    {
      form.reset();
    }
    this.individualTrackingService.selectedIndividualTracking = {
      Id: null,
      SchoolNam: '',
      RollNo: '',
      StudentNam: '',
      StudentCaste: '',
      DayInfo: '',
      MonthInfo: '',
      YearInfo: '',
      ParameterNam: '',
      DataValue: '',
    }      
  }


  onSubmit(form: NgForm) {  
    if (form.value.Id == null) {
      this.individualTrackingService.postIndividualTracking(form.value)
        .subscribe(data => {
          this.resetForm(form);
          this.individualTrackingService.getIndividualTrackingList();
          this.toastr.success('New Record Added Succcessfully', 'IndividualTracking Register');
        })
    }
    else {
      this.individualTrackingService.putIndividualTracking(form.value.Id, form.value)
      .subscribe(data => {
        this.resetForm(form);
        this.individualTrackingService.getIndividualTrackingList();
        this.toastr.info('Record Updated Successfully!', 'IndividualTracking Register');
      });
    }
  }

}

