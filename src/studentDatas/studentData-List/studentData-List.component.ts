import { Component, OnInit } from '@angular/core';

import { StudentDataService } from '../shared/studentData.service'
import { StudentData } from '../shared/studentData.model';
import { ToastrService } from 'ngx-toastr';   

@Component({
  selector: 'app-studentData-list',
  templateUrl: './studentData-list.component.html',
  styleUrls: ['./studentData-list.component.css']
})
export class StudentDataListComponent implements OnInit {

  constructor(private studentDataService: StudentDataService,private toastr : ToastrService) { }

  ngOnInit() {
    this.studentDataService.getStudentDataList();
  }

  showForEdit(objStudentData: StudentData) {    
    this.studentDataService.selectedStudentData = Object.assign({}, objStudentData);
    if(this.studentDataService.selectedStudentData.Id != null)
    {
    } 
  }

  onDelete(id: number) {    
    if (confirm('Are you sure to delete this record ?') == true) {
      this.studentDataService.deleteStudentData(id)
      .subscribe(x => {
        this.studentDataService.getStudentDataList();
        this.toastr.warning("Deleted Successfully","StudentData Register");
      })
    }
  }
}
