import { Component, OnInit } from '@angular/core';

import {MonthInfoService} from './shared/monthInfo.service'
@Component({
  selector: 'app-monthInfos',
  templateUrl: './monthInfos.component.html',
  styleUrls: ['./monthInfos.component.css'],
  providers:[MonthInfoService]
})
export class MonthInfosComponent implements OnInit {

  constructor(private monthInfoService : MonthInfoService) { }

  ngOnInit() {
  }

}
