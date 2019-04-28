import { Component, OnInit } from '@angular/core';

import { VolunteerService } from '../shared/volunteer.service'
import { Volunteer } from '../shared/volunteermodel';
import { ToastrService } from 'ngx-toastr';   

@Component({
  selector: 'app-volunteer-list',
  templateUrl: './volunteerlist.component.html',
  styleUrls: ['./volunteerlist.component.css']
})
export class VolunteerListComponent implements OnInit {

  constructor(private volunteerService: VolunteerService,private toastr : ToastrService) { }

  ngOnInit() {
    this.volunteerService.getVolunteerList();
  }

  showForEdit(objVolunteer: Volunteer) {    
    this.volunteerService.selectedVolunteer = Object.assign({}, objVolunteer);
    if(this.volunteerService.selectedVolunteer.Id != null)
    {
    } 
  }

  onDelete(id: number) {    
    if (confirm('Are you sure to delete this record ?') == true) {
      this.volunteerService.deleteVolunteer(id)
      .subscribe(x => {
        this.volunteerService.getVolunteerList();
        this.toastr.warning("Deleted Successfully","Volunteer Register");
      })
    }
  }
}
