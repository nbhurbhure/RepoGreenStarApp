import { Component, OnInit } from '@angular/core';

import { DayInfoService } from '../shared/dayInfo.service'
import { DayInfo } from '../shared/dayInfo.model';
import { ToastrService } from 'ngx-toastr';   

@Component({
  selector: 'app-dayInfo-list',
  templateUrl: './dayInfo-list.component.html',
  styleUrls: ['./dayInfo-list.component.css']
})
export class DayInfoListComponent implements OnInit {

  constructor(private dayInfoService: DayInfoService,private toastr : ToastrService) { }

  ngOnInit() {
    this.dayInfoService.getDayInfoList();
  }

  showForEdit(objDayInfo: DayInfo) {    
    this.dayInfoService.selectedDayInfo = Object.assign({}, objDayInfo);
    if(this.dayInfoService.selectedDayInfo.Id != null)
    {
    } 
  }

  onDelete(id: number) {    
    if (confirm('Are you sure to delete this record ?') == true) {
      this.dayInfoService.deleteDayInfo(id)
      .subscribe(x => {
        this.dayInfoService.getDayInfoList();
        this.toastr.warning("Deleted Successfully","DayInfo Register");
      })
    }
  }
}
