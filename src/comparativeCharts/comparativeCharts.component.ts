import { Component, OnInit } from '@angular/core';

import {ComparativeChartService} from './shared/comparativeChart.service'
@Component({
  selector: 'app-comparativeCharts',
  templateUrl: './comparativeCharts.component.html',
  styleUrls: ['./comparativeCharts.component.css'],
  providers:[ComparativeChartService]
})
export class ComparativeChartsComponent implements OnInit {

  constructor(private comparativeChartService : ComparativeChartService) { }

  ngOnInit() {
  }

}
