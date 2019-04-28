import { Component, OnInit } from '@angular/core';

import { TeamStudentMappingService } from '../shared/teamStudentMapping.service'
import { TeamStudentMapping } from '../shared/teamStudentMappingmodel';
import { ToastrService } from 'ngx-toastr';   

@Component({
  selector: 'app-teamStudentMapping-list',
  templateUrl: './teamStudentMappinglist.component.html',
  styleUrls: ['./teamStudentMappinglist.component.css']
})
export class TeamStudentMappingListComponent implements OnInit {

  constructor(private teamStudentMappingService: TeamStudentMappingService,private toastr : ToastrService) { }

  ngOnInit() {
    this.teamStudentMappingService.getTeamStudentMappingList();
  }

  showForEdit(objTeamStudentMapping: TeamStudentMapping) {    
    this.teamStudentMappingService.selectedTeamStudentMapping = Object.assign({}, objTeamStudentMapping);
    if(this.teamStudentMappingService.selectedTeamStudentMapping.Id != null)
    {
    } 
  }

  onDelete(id: number) {    
    if (confirm('Are you sure to delete this record ?') == true) {
      this.teamStudentMappingService.deleteTeamStudentMapping(id)
      .subscribe(x => {
        this.teamStudentMappingService.getTeamStudentMappingList();
        this.toastr.warning("Deleted Successfully","TeamStudentMapping Register");
      })
    }
  }
}
