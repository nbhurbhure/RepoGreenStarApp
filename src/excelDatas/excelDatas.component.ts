import { Component, OnInit } from '@angular/core';

import {ExcelDataService} from './shared/excelData.service'
@Component({
  selector: 'app-excelDatas',
  templateUrl: './excelDatas.component.html',
  styleUrls: ['./excelDatas.component.css'],
  providers:[ExcelDataService]
})
export class ExcelDatasComponent implements OnInit {

  constructor(private excelDataService : ExcelDataService) { }

  ngOnInit() {
  }



}
