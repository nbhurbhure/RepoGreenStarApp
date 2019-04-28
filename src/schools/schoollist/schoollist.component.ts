import { Component, OnInit } from '@angular/core';

import { SchoolService } from '../shared/school.service'
import { School } from '../shared/schoolmodel';
import { ToastrService } from 'ngx-toastr';   

@Component({
  selector: 'app-school-list',
  templateUrl: './schoollist.component.html',
  styleUrls: ['./schoollist.component.css']
})
export class SchoolListComponent implements OnInit {

  constructor(private schoolService: SchoolService,private toastr : ToastrService) { }

  ngOnInit() {
    this.schoolService.getSchoolList();
  }

  showForEdit(objSchool: School) {    
    this.schoolService.selectedSchool = Object.assign({}, objSchool);
    if(this.schoolService.selectedSchool.Id != null)
    {
    } 
  }

  onDelete(id: number) {    
    if (confirm('Are you sure to delete this record ?') == true) {
      this.schoolService.deleteSchool(id)
      .subscribe(x => {
        this.schoolService.getSchoolList();
        this.toastr.warning("Deleted Successfully","School Register");
      })
    }
  }
}
