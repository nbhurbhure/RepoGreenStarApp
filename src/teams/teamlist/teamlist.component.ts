import { Component, OnInit } from '@angular/core';

import { TeamService } from '../shared/team.service'
import { Team } from '../shared/teammodel';
import { ToastrService } from 'ngx-toastr';   

@Component({
  selector: 'app-team-list',
  templateUrl: './teamlist.component.html',
  styleUrls: ['./teamlist.component.css']
})
export class TeamListComponent implements OnInit {

  constructor(private teamService: TeamService,private toastr : ToastrService) { }

  ngOnInit() {
    this.teamService.getTeamList();
  }

  showForEdit(objTeam: Team) {    
    this.teamService.selectedTeam = Object.assign({}, objTeam);
    if(this.teamService.selectedTeam.Id != null)
    {
    } 
  }

  onDelete(id: number) {    
    if (confirm('Are you sure to delete this record ?') == true) {
      this.teamService.deleteTeam(id)
      .subscribe(x => {
        this.teamService.getTeamList();
        this.toastr.warning("Deleted Successfully","Team Register");
      })
    }
  }
}
