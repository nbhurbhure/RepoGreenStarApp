import { Component, OnInit } from '@angular/core';

import { OutreachService } from '../shared/outreach.service'
import { Outreach } from '../shared/outreach.model';
import { ToastrService } from 'ngx-toastr';   

@Component({
  selector: 'app-outreach-list',
  templateUrl: './outreach-list.component.html',
  styleUrls: ['./outreach-list.component.css']
})
export class OutreachListComponent implements OnInit {

  constructor(private outreachService: OutreachService,private toastr : ToastrService) { }

  ngOnInit() {
    this.outreachService.getOutreachList();
  }

  showForEdit(objOutreach: Outreach) {    
    this.outreachService.selectedOutreach = Object.assign({}, objOutreach);
    if(this.outreachService.selectedOutreach.Id != null)
    {
    } 
  }

  onDelete(id: number) {    
    if (confirm('Are you sure to delete this record ?') == true) {
      this.outreachService.deleteOutreach(id)
      .subscribe(x => {
        this.outreachService.getOutreachList();
        this.toastr.warning("Deleted Successfully","Outreach Register");
      })
    }
  }
}
