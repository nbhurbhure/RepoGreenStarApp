import { Component, OnInit } from '@angular/core';

import { ExcelDataService } from '../shared/excelData.service'
import { ExcelData } from '../shared/excelDatamodel';
import { ToastrService } from 'ngx-toastr';   

@Component({
  selector: 'app-excelData-list',
  templateUrl: './excelDatalist.component.html',
  styleUrls: ['./excelDatalist.component.css']
})
export class ExcelDataListComponent implements OnInit {

  constructor(private excelDataService: ExcelDataService,private toastr : ToastrService) { }

  ngOnInit() {
   // this.excelDataService.getExcelDataList();
  }

  showForEdit(objExcelData: ExcelData) {    
    this.excelDataService.selectedExcelData = Object.assign({}, objExcelData);
    if(this.excelDataService.selectedExcelData.Id != null)
    {
    } 
  }

  ProcessExcelData() {
    this.excelDataService.getExcelDataList();
  }

  onDelete(id: number) {    
    if (confirm('Are you sure to delete this record ?') == true) {
      this.excelDataService.deleteExcelData(id)
      .subscribe(x => {
        this.excelDataService.getExcelDataList();
        this.toastr.warning("Deleted Successfully","ExcelData Register");
      })
    }
  }
}
