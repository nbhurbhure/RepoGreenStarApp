import { Component, OnInit } from '@angular/core';

import { WeekInfoService } from '../shared/weekInfo.service'
import { WeekInfo } from '../shared/weekInfo.model';
import { ToastrService } from 'ngx-toastr';   

@Component({
  selector: 'app-weekInfo-list',
  templateUrl: './weekInfo-list.component.html',
  styleUrls: ['./weekInfo-list.component.css']
})
export class WeekInfoListComponent implements OnInit {

  constructor(private weekInfoService: WeekInfoService,private toastr : ToastrService) { }

  ngOnInit() {
    this.weekInfoService.getWeekInfoList();
  }

  showForEdit(objWeekInfo: WeekInfo) {    
    this.weekInfoService.selectedWeekInfo = Object.assign({}, objWeekInfo);
    if(this.weekInfoService.selectedWeekInfo.Id != null)
    {
    } 
  }

  onDelete(id: number) {    
    if (confirm('Are you sure to delete this record ?') == true) {
      this.weekInfoService.deleteWeekInfo(id)
      .subscribe(x => {
        this.weekInfoService.getWeekInfoList();
        this.toastr.warning("Deleted Successfully","WeekInfo Register");
      })
    }
  }
}
