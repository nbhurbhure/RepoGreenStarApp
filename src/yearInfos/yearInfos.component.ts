import { Component, OnInit } from '@angular/core';

import {YearInfoService} from './shared/yearInfo.service'
@Component({
  selector: 'app-yearInfos',
  templateUrl: './yearInfos.component.html',
  styleUrls: ['./yearInfos.component.css'],
  providers:[YearInfoService]
})
export class YearInfosComponent implements OnInit {

  constructor(private yearInfoService : YearInfoService) { }

  ngOnInit() {
  }

}
