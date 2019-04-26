import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { CityService } from '../shared/city.service';
import { ToastrService } from 'ngx-toastr';
import { appconstants } from 'src/common/appconstants';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
    
  constructor(private cityService: CityService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();     
    }

  resetForm(form?: NgForm) {
    if (form != null)
    {
      form.reset();
    }
    this.cityService.selectedCity = {
      Id: null,
      Name: '',
      OutreachName: '',
      FOutreachId: null,
    }      
    this.cityService.getOutreachList(); 
  }


  onSubmit(form: NgForm) {  
    if (form.value.Id == null) {
      this.cityService.postCity(form.value)
        .subscribe(data => {
          this.resetForm(form);
          this.cityService.getCityList();
          this.toastr.success('New Record Added Succcessfully', 'City Register');
        })
    }
    else {
      this.cityService.putCity(form.value.Id, form.value)
      .subscribe(data => {
        this.resetForm(form);
        this.cityService.getCityList();
        this.toastr.info('Record Updated Successfully!', 'City Register');
      });
    }
  }

}

