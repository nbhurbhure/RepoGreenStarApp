import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { VroleService } from '../shared/vrole.service';
import { ToastrService } from 'ngx-toastr';
import { appconstants } from 'src/common/appconstants';

@Component({
  selector: 'app-vrole',
  templateUrl: './vrole.component.html',
  styleUrls: ['./vrole.component.css']
})
export class VroleComponent implements OnInit {
    
  constructor(private vroleService: VroleService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();     
    }

  resetForm(form?: NgForm) {
    if (form != null)
    {
      form.reset();
    }
    this.vroleService.selectedVrole = {
      Id: null,
      Name: '',
    }      
  }


  onSubmit(form: NgForm) {  
    if (form.value.Id == null) {
      this.vroleService.postVrole(form.value)
        .subscribe(data => {
          this.resetForm(form);
          this.vroleService.getVroleList();
          this.toastr.success('New Record Added Succcessfully', 'Vrole Register');
        })
    }
    else {
      this.vroleService.putVrole(form.value.Id, form.value)
      .subscribe(data => {
        this.resetForm(form);
        this.vroleService.getVroleList();
        this.toastr.info('Record Updated Successfully!', 'Vrole Register');
      });
    }
  }

}

