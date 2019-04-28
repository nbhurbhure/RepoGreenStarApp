import { Component, OnInit } from '@angular/core';

import { MonthInfoService } from '../shared/monthInfo.service'
import { MonthInfo } from '../shared/monthInfomodel';
import { ToastrService } from 'ngx-toastr';   

@Component({
  selector: 'app-monthInfo-list',
  templateUrl: './monthInfolist.component.html',
  styleUrls: ['./monthInfolist.component.css']
})
export class MonthInfoListComponent implements OnInit {

  constructor(private monthInfoService: MonthInfoService,private toastr : ToastrService) { }

  ngOnInit() {
    this.monthInfoService.getMonthInfoList();
  }

  showForEdit(objMonthInfo: MonthInfo) {    
    this.monthInfoService.selectedMonthInfo = Object.assign({}, objMonthInfo);
    if(this.monthInfoService.selectedMonthInfo.Id != null)
    {
    } 
  }

  onDelete(id: number) {    
    if (confirm('Are you sure to delete this record ?') == true) {
      this.monthInfoService.deleteMonthInfo(id)
      .subscribe(x => {
        this.monthInfoService.getMonthInfoList();
        this.toastr.warning("Deleted Successfully","MonthInfo Register");
      })
    }
  }
}
