import { Component, OnInit } from '@angular/core';

import { ComparativeChartService } from '../shared/comparativeChart.service'
import { ComparativeChart } from '../shared/comparativeChart.model';
import { ToastrService } from 'ngx-toastr';   

@Component({
  selector: 'app-comparativeChart-list',
  templateUrl: './comparativeChart-list.component.html',
  styleUrls: ['./comparativeChart-list.component.css']
})
export class ComparativeChartListComponent implements OnInit {

  constructor(private comparativeChartService: ComparativeChartService,private toastr : ToastrService) { }

  ngOnInit() {
    this.comparativeChartService.getComparativeChartList();
  }

  showForEdit(objComparativeChart: ComparativeChart) {    
    this.comparativeChartService.selectedComparativeChart = Object.assign({}, objComparativeChart);
    if(this.comparativeChartService.selectedComparativeChart.Id != null)
    {
    } 
  }

  onDelete(id: number) {    
    if (confirm('Are you sure to delete this record ?') == true) {
      this.comparativeChartService.deleteComparativeChart(id)
      .subscribe(x => {
        this.comparativeChartService.getComparativeChartList();
        this.toastr.warning("Deleted Successfully","ComparativeChart Register");
      })
    }
  }
}
