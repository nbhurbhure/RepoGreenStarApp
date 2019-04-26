import { Component, OnInit } from '@angular/core';

import {VolunteerService} from './shared/volunteer.service'
@Component({
  selector: 'app-volunteers',
  templateUrl: './volunteers.component.html',
  styleUrls: ['./volunteers.component.css'],
  providers:[VolunteerService]
})
export class VolunteersComponent implements OnInit {

  constructor(private volunteerService : VolunteerService) { }

  ngOnInit() {
  }

}
