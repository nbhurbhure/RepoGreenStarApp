import { Component, OnInit } from '@angular/core';

import { VroleService } from '../shared/vrole.service'
import { Vrole } from '../shared/vrolemodel';
import { ToastrService } from 'ngx-toastr';   

@Component({
  selector: 'app-vrole-list',
  templateUrl: './vrolelist.component.html',
  styleUrls: ['./vrolelist.component.css']
})
export class VroleListComponent implements OnInit {

  constructor(private vroleService: VroleService,private toastr : ToastrService) { }

  ngOnInit() {
    this.vroleService.getVroleList();
  }

  showForEdit(objVrole: Vrole) {    
    this.vroleService.selectedVrole = Object.assign({}, objVrole);
    if(this.vroleService.selectedVrole.Id != null)
    {
    } 
  }

  onDelete(id: number) {    
    if (confirm('Are you sure to delete this record ?') == true) {
      this.vroleService.deleteVrole(id)
      .subscribe(x => {
        this.vroleService.getVroleList();
        this.toastr.warning("Deleted Successfully","Vrole Register");
      })
    }
  }
}
