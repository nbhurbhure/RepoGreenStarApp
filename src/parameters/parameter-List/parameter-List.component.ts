import { Component, OnInit } from '@angular/core';

import { ParameterService } from '../shared/parameter.service'
import { Parameter } from '../shared/parameter.model';
import { ToastrService } from 'ngx-toastr';   

@Component({
  selector: 'app-parameter-list',
  templateUrl: './parameter-list.component.html',
  styleUrls: ['./parameter-list.component.css']
})
export class ParameterListComponent implements OnInit {

  constructor(private parameterService: ParameterService,private toastr : ToastrService) { }

  ngOnInit() {
    this.parameterService.getParameterList();
  }

  showForEdit(objParameter: Parameter) {    
    this.parameterService.selectedParameter = Object.assign({}, objParameter);
    if(this.parameterService.selectedParameter.Id != null)
    {
    } 
  }

  onDelete(id: number) {    
    if (confirm('Are you sure to delete this record ?') == true) {
      this.parameterService.deleteParameter(id)
      .subscribe(x => {
        this.parameterService.getParameterList();
        this.toastr.warning("Deleted Successfully","Parameter Register");
      })
    }
  }
}
