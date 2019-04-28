import { Component, OnInit } from '@angular/core';

import { HolidayTypeService } from '../shared/holidayType.service'
import { HolidayType } from '../shared/holidayTypemodel';
import { ToastrService } from 'ngx-toastr';   

@Component({
  selector: 'app-holidayType-list',
  templateUrl: './holidayTypelist.component.html',
  styleUrls: ['./holidayTypelist.component.css']
})
export class HolidayTypeListComponent implements OnInit {

  constructor(private holidayTypeService: HolidayTypeService,private toastr : ToastrService) { }

  ngOnInit() {
    this.holidayTypeService.getHolidayTypeList();
  }

  showForEdit(objHolidayType: HolidayType) {    
    this.holidayTypeService.selectedHolidayType = Object.assign({}, objHolidayType);
    if(this.holidayTypeService.selectedHolidayType.Id != null)
    {
    } 
  }

  onDelete(id: number) {    
    if (confirm('Are you sure to delete this record ?') == true) {
      this.holidayTypeService.deleteHolidayType(id)
      .subscribe(x => {
        this.holidayTypeService.getHolidayTypeList();
        this.toastr.warning("Deleted Successfully","HolidayType Register");
      })
    }
  }
}
