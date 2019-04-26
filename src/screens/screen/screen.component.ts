import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { ScreenService } from '../shared/screen.service';
import { ToastrService } from 'ngx-toastr';
import { appconstants } from 'src/common/appconstants';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.css']
})
export class ScreenComponent implements OnInit {
    
  constructor(private screenService: ScreenService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();     
    }

  resetForm(form?: NgForm) {
    if (form != null)
    {
      form.reset();
    }
    this.screenService.selectedScreen = {
      Id: null,
      Name: '',
    }      
  }


  onSubmit(form: NgForm) {  
    if (form.value.Id == null) {
      this.screenService.postScreen(form.value)
        .subscribe(data => {
          this.resetForm(form);
          this.screenService.getScreenList();
          this.toastr.success('New Record Added Succcessfully', 'Screen Register');
        })
    }
    else {
      this.screenService.putScreen(form.value.Id, form.value)
      .subscribe(data => {
        this.resetForm(form);
        this.screenService.getScreenList();
        this.toastr.info('Record Updated Successfully!', 'Screen Register');
      });
    }
  }

}

