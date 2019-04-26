import { Component, OnInit } from '@angular/core';

import {WeekInfoService} from './shared/weekInfo.service'
@Component({
  selector: 'app-weekInfos',
  templateUrl: './weekInfos.component.html',
  styleUrls: ['./weekInfos.component.css'],
  providers:[WeekInfoService]
})
export class WeekInfosComponent implements OnInit {

  constructor(private weekInfoService : WeekInfoService) { }

  ngOnInit() {
  }

}
