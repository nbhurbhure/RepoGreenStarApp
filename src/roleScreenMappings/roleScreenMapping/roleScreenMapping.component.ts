import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { RoleScreenMappingService } from '../shared/roleScreenMapping.service';
import { ToastrService } from 'ngx-toastr';
import { appconstants } from 'src/common/appconstants';

@Component({
  selector: 'app-roleScreenMapping',
  templateUrl: './roleScreenMapping.component.html',
  styleUrls: ['./roleScreenMapping.component.css']
})
export class RoleScreenMappingComponent implements OnInit {

  constructor(private roleScreenMappingService: RoleScreenMappingService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
    }

  resetForm(form?: NgForm) {
    if (form != null)
    {
      form.reset();
    }
    this.roleScreenMappingService.selectedRoleScreenMapping = {
      Id: null,
      VroleName: '',
      ScreenName: '',
      FVroleId: null,
      FScreenId: null,
    }
    this.roleScreenMappingService.getVroleList();
    this.roleScreenMappingService.getScreenList();
  }


  onSubmit(form: NgForm) {
    if (form.value.Id == null) {
      this.roleScreenMappingService.postRoleScreenMapping(form.value)
        .subscribe(data => {
          this.resetForm(form);
          this.roleScreenMappingService.getRoleScreenMappingList();
          this.toastr.success('New Record Added Succcessfully', 'RoleScreenMapping Register');
        })
    }
    else {
      this.roleScreenMappingService.putRoleScreenMapping(form.value.Id, form.value)
      .subscribe(data => {
        this.resetForm(form);
        this.roleScreenMappingService.getRoleScreenMappingList();
        this.toastr.info('Record Updated Successfully!', 'RoleScreenMapping Register');
      });
    }
  }

}

