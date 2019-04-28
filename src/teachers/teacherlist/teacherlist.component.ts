import { Component, OnInit } from '@angular/core';

import { TeacherService } from '../shared/teacher.service'
import { Teacher } from '../shared/teachermodel';
import { ToastrService } from 'ngx-toastr';   

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacherlist.component.html',
  styleUrls: ['./teacherlist.component.css']
})
export class TeacherListComponent implements OnInit {

  constructor(private teacherService: TeacherService,private toastr : ToastrService) { }

  ngOnInit() {
    this.teacherService.getTeacherList();
  }

  showForEdit(objTeacher: Teacher) {    
    this.teacherService.selectedTeacher = Object.assign({}, objTeacher);
    if(this.teacherService.selectedTeacher.Id != null)
    {
    } 
  }

  onDelete(id: number) {    
    if (confirm('Are you sure to delete this record ?') == true) {
      this.teacherService.deleteTeacher(id)
      .subscribe(x => {
        this.teacherService.getTeacherList();
        this.toastr.warning("Deleted Successfully","Teacher Register");
      })
    }
  }
}
