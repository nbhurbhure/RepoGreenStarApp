import { Component, OnInit } from '@angular/core';

import {DayInfoService} from './shared/dayInfo.service'
@Component({
  selector: 'app-dayInfos',
  templateUrl: './dayInfos.component.html',
  styleUrls: ['./dayInfos.component.css'],
  providers:[DayInfoService]
})
export class DayInfosComponent implements OnInit {

  constructor(private dayInfoService : DayInfoService) { }

  ngOnInit() {
  }

}
