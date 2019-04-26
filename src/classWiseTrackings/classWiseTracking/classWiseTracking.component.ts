import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { ClassWiseTrackingService } from '../shared/classWiseTracking.service';
import { ToastrService } from 'ngx-toastr';
import { appconstants } from 'src/common/appconstants';

@Component({
  selector: 'app-classWiseTracking',
  templateUrl: './classWiseTracking.component.html',
  styleUrls: ['./classWiseTracking.component.css']
})
export class ClassWiseTrackingComponent implements OnInit {
    
  constructor(private classWiseTrackingService: ClassWiseTrackingService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();     
    }

  resetForm(form?: NgForm) {
    if (form != null)
    {
      form.reset();
    }
    this.classWiseTrackingService.selectedClassWiseTracking = {
      Id: null,
      StandardNam: '',
      SectionNam: '',
      ParameterNam: '',
      StudentStatus: '',
    }      
  }


  onSubmit(form: NgForm) {  
    if (form.value.Id == null) {
      this.classWiseTrackingService.postClassWiseTracking(form.value)
        .subscribe(data => {
          this.resetForm(form);
          this.classWiseTrackingService.getClassWiseTrackingList();
          this.toastr.success('New Record Added Succcessfully', 'ClassWiseTracking Register');
        })
    }
    else {
      this.classWiseTrackingService.putClassWiseTracking(form.value.Id, form.value)
      .subscribe(data => {
        this.resetForm(form);
        this.classWiseTrackingService.getClassWiseTrackingList();
        this.toastr.info('Record Updated Successfully!', 'ClassWiseTracking Register');
      });
    }
  }

}

