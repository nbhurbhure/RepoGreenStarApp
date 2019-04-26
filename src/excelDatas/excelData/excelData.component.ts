import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { ExcelDataService } from '../shared/excelData.service';
import { ToastrService } from 'ngx-toastr';
import { appconstants } from 'src/common/appconstants';

@Component({
  selector: 'app-excelData',
  templateUrl: './excelData.component.html',
  styleUrls: ['./excelData.component.css']
})
export class ExcelDataComponent implements OnInit {
    
  constructor(private excelDataService: ExcelDataService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();     
    }

  resetForm(form?: NgForm) {
    if (form != null)
    {
      form.reset();
    }
    this.excelDataService.selectedExcelData = {
      Id: null,
      Location: '',
      SchoolNam: '',
      SchoolAddress: '',
      Standard: '',
      Section: '',
      TeacherNam: '',
      StudentNam: '',
      Year: '',
      Month: '',
      Date: '',
      TeamNam: '',
      LeaderNam: '',
      ParameterNam: '',
      Marks: '',
    }      
  }


  onSubmit(form: NgForm) {  
    if (form.value.Id == null) {
      this.excelDataService.postExcelData(form.value)
        .subscribe(data => {
          this.resetForm(form);
          this.excelDataService.getExcelDataList();
          this.toastr.success('New Record Added Succcessfully', 'ExcelData Register');
        })
    }
    else {
      this.excelDataService.putExcelData(form.value.Id, form.value)
      .subscribe(data => {
        this.resetForm(form);
        this.excelDataService.getExcelDataList();
        this.toastr.info('Record Updated Successfully!', 'ExcelData Register');
      });
    }
  }

}

