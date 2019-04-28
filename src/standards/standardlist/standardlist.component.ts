import { Component, OnInit } from '@angular/core';

import { StandardService } from '../shared/standard.service'
import { Standard } from '../shared/standardmodel';
import { ToastrService } from 'ngx-toastr';   

@Component({
  selector: 'app-standard-list',
  templateUrl: './standardlist.component.html',
  styleUrls: ['./standardlist.component.css']
})
export class StandardListComponent implements OnInit {

  constructor(private standardService: StandardService,private toastr : ToastrService) { }

  ngOnInit() {
    this.standardService.getStandardList();
  }

  showForEdit(objStandard: Standard) {    
    this.standardService.selectedStandard = Object.assign({}, objStandard);
    if(this.standardService.selectedStandard.Id != null)
    {
    } 
  }

  onDelete(id: number) {    
    if (confirm('Are you sure to delete this record ?') == true) {
      this.standardService.deleteStandard(id)
      .subscribe(x => {
        this.standardService.getStandardList();
        this.toastr.warning("Deleted Successfully","Standard Register");
      })
    }
  }
}
