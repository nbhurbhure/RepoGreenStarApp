import { Component, OnInit } from '@angular/core';

import {HolidayService} from './shared/holiday.service'
@Component({
  selector: 'app-holidays',
  templateUrl: './holidays.component.html',
  styleUrls: ['./holidays.component.css'],
  providers:[HolidayService]
})
export class HolidaysComponent implements OnInit {

  constructor(private holidayService : HolidayService) { }

  ngOnInit() {
  }

}
