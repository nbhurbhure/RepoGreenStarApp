import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { ColorService } from '../shared/color.service';
import { ToastrService } from 'ngx-toastr';
import { appconstants } from 'src/common/appconstants';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
    
  constructor(private colorService: ColorService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();     
    }

  resetForm(form?: NgForm) {
    if (form != null)
    {
      form.reset();
    }
    this.colorService.selectedColor = {
      Id: null,
      Name: '',
      Points: null,
    }      
  }


  onSubmit(form: NgForm) {  
    if (form.value.Id == null) {
      this.colorService.postColor(form.value)
        .subscribe(data => {
          this.resetForm(form);
          this.colorService.getColorList();
          this.toastr.success('New Record Added Succcessfully', 'Color Register');
        })
    }
    else {
      this.colorService.putColor(form.value.Id, form.value)
      .subscribe(data => {
        this.resetForm(form);
        this.colorService.getColorList();
        this.toastr.info('Record Updated Successfully!', 'Color Register');
      });
    }
  }

}

