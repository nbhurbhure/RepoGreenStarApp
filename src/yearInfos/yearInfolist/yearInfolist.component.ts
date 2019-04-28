import { Component, OnInit } from '@angular/core';

import { YearInfoService } from '../shared/yearInfo.service'
import { YearInfo } from '../shared/yearInfomodel';
import { ToastrService } from 'ngx-toastr';   

@Component({
  selector: 'app-yearInfo-list',
  templateUrl: './yearInfolist.component.html',
  styleUrls: ['./yearInfolist.component.css']
})
export class YearInfoListComponent implements OnInit {

  constructor(private yearInfoService: YearInfoService,private toastr : ToastrService) { }

  ngOnInit() {
    this.yearInfoService.getYearInfoList();
  }

  showForEdit(objYearInfo: YearInfo) {    
    this.yearInfoService.selectedYearInfo = Object.assign({}, objYearInfo);
    if(this.yearInfoService.selectedYearInfo.Id != null)
    {
    } 
  }

  onDelete(id: number) {    
    if (confirm('Are you sure to delete this record ?') == true) {
      this.yearInfoService.deleteYearInfo(id)
      .subscribe(x => {
        this.yearInfoService.getYearInfoList();
        this.toastr.warning("Deleted Successfully","YearInfo Register");
      })
    }
  }
}
