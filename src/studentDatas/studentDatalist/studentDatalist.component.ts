import { Component, OnInit } from '@angular/core';

import { StudentDataService } from '../shared/studentData.service'
import { StudentData } from '../shared/studentDatamodel';
import { ToastrService } from 'ngx-toastr';   

@Component({
  selector: 'app-studentData-list',
  templateUrl: './studentDatalist.component.html',
  styleUrls: ['./studentDatalist.component.css']
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
