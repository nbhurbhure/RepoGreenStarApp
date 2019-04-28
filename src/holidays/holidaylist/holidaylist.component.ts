import { Component, OnInit } from '@angular/core';

import { HolidayService } from '../shared/holiday.service'
import { Holiday } from '../shared/holidaymodel';
import { ToastrService } from 'ngx-toastr';   

@Component({
  selector: 'app-holiday-list',
  templateUrl: './holidaylist.component.html',
  styleUrls: ['./holidaylist.component.css']
})
export class HolidayListComponent implements OnInit {

  constructor(private holidayService: HolidayService,private toastr : ToastrService) { }

  ngOnInit() {
    this.holidayService.getHolidayList();
  }

  showForEdit(objHoliday: Holiday) {    
    this.holidayService.selectedHoliday = Object.assign({}, objHoliday);
    if(this.holidayService.selectedHoliday.Id != null)
    {
    } 
  }

  onDelete(id: number) {    
    if (confirm('Are you sure to delete this record ?') == true) {
      this.holidayService.deleteHoliday(id)
      .subscribe(x => {
        this.holidayService.getHolidayList();
        this.toastr.warning("Deleted Successfully","Holiday Register");
      })
    }
  }
}
