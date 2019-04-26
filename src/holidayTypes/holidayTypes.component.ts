import { Component, OnInit } from '@angular/core';

import {HolidayTypeService} from './shared/holidayType.service'
@Component({
  selector: 'app-holidayTypes',
  templateUrl: './holidayTypes.component.html',
  styleUrls: ['./holidayTypes.component.css'],
  providers:[HolidayTypeService]
})
export class HolidayTypesComponent implements OnInit {

  constructor(private holidayTypeService : HolidayTypeService) { }

  ngOnInit() {
  }

}
