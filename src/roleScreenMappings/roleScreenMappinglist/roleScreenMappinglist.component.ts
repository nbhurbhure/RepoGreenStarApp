import { Component, OnInit } from '@angular/core';

import { RoleScreenMappingService } from '../shared/roleScreenMapping.service'
import { RoleScreenMapping } from '../shared/roleScreenMappingmodel';
import { ToastrService } from 'ngx-toastr';   

@Component({
  selector: 'app-roleScreenMapping-list',
  templateUrl: './roleScreenMappinglist.component.html',
  styleUrls: ['./roleScreenMappinglist.component.css']
})
export class RoleScreenMappingListComponent implements OnInit {

  constructor(private roleScreenMappingService: RoleScreenMappingService,private toastr : ToastrService) { }

  ngOnInit() {
    this.roleScreenMappingService.getRoleScreenMappingList();
  }

  showForEdit(objRoleScreenMapping: RoleScreenMapping) {    
    this.roleScreenMappingService.selectedRoleScreenMapping = Object.assign({}, objRoleScreenMapping);
    if(this.roleScreenMappingService.selectedRoleScreenMapping.Id != null)
    {
    } 
  }

  onDelete(id: number) {    
    if (confirm('Are you sure to delete this record ?') == true) {
      this.roleScreenMappingService.deleteRoleScreenMapping(id)
      .subscribe(x => {
        this.roleScreenMappingService.getRoleScreenMappingList();
        this.toastr.warning("Deleted Successfully","RoleScreenMapping Register");
      })
    }
  }
}
