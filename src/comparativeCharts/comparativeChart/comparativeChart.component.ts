import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { ComparativeChartService } from '../shared/comparativeChart.service';
import { ToastrService } from 'ngx-toastr';
import { appconstants } from 'src/common/appconstants';

@Component({
  selector: 'app-comparativeChart',
  templateUrl: './comparativeChart.component.html',
  styleUrls: ['./comparativeChart.component.css']
})
export class ComparativeChartComponent implements OnInit {
    
  constructor(private comparativeChartService: ComparativeChartService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();     
    }

  resetForm(form?: NgForm) {
    if (form != null)
    {
      form.reset();
    }
    this.comparativeChartService.selectedComparativeChart = {
      Id: null,
      StandardNam: '',
      SectionNam: '',
      ParameterNam: '',
      MonthNam: '',
      MonthPercent: '',
      IncreasePercent: '',
    }      
  }


  onSubmit(form: NgForm) {  
    if (form.value.Id == null) {
      this.comparativeChartService.postComparativeChart(form.value)
        .subscribe(data => {
          this.resetForm(form);
          this.comparativeChartService.getComparativeChartList();
          this.toastr.success('New Record Added Succcessfully', 'ComparativeChart Register');
        })
    }
    else {
      this.comparativeChartService.putComparativeChart(form.value.Id, form.value)
      .subscribe(data => {
        this.resetForm(form);
        this.comparativeChartService.getComparativeChartList();
        this.toastr.info('Record Updated Successfully!', 'ComparativeChart Register');
      });
    }
  }

}

