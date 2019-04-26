import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { OutreachService } from '../shared/outreach.service';
import { ToastrService } from 'ngx-toastr';
import { appconstants } from 'src/common/appconstants';

@Component({
  selector: 'app-outreach',
  templateUrl: './outreach.component.html',
  styleUrls: ['./outreach.component.css']
})
export class OutreachComponent implements OnInit {
    
  constructor(private outreachService: OutreachService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();     
    }

  resetForm(form?: NgForm) {
    if (form != null)
    {
      form.reset();
    }
    this.outreachService.selectedOutreach = {
      Id: null,
      Name: '',
    }      
  }


  onSubmit(form: NgForm) {  
    if (form.value.Id == null) {
      this.outreachService.postOutreach(form.value)
        .subscribe(data => {
          this.resetForm(form);
          this.outreachService.getOutreachList();
          this.toastr.success('New Record Added Succcessfully', 'Outreach Register');
        })
    }
    else {
      this.outreachService.putOutreach(form.value.Id, form.value)
      .subscribe(data => {
        this.resetForm(form);
        this.outreachService.getOutreachList();
        this.toastr.info('Record Updated Successfully!', 'Outreach Register');
      });
    }
  }

}

