import { Component, OnInit } from '@angular/core';

import { StudentService } from '../shared/student.service'
import { Student } from '../shared/studentmodel';
import { ToastrService } from 'ngx-toastr';   

@Component({
  selector: 'app-student-list',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentListComponent implements OnInit {

  constructor(private studentService: StudentService,private toastr : ToastrService) { }

  ngOnInit() {
    this.studentService.getStudentList();
  }

  showForEdit(objStudent: Student) {    
    this.studentService.selectedStudent = Object.assign({}, objStudent);
    if(this.studentService.selectedStudent.Id != null)
    {
    } 
  }

  onDelete(id: number) {    
    if (confirm('Are you sure to delete this record ?') == true) {
      this.studentService.deleteStudent(id)
      .subscribe(x => {
        this.studentService.getStudentList();
        this.toastr.warning("Deleted Successfully","Student Register");
      })
    }
  }
}
