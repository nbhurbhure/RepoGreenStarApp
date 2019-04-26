import { Component, OnInit } from '@angular/core';

import {TeamStudentMappingService} from './shared/teamStudentMapping.service'
@Component({
  selector: 'app-teamStudentMappings',
  templateUrl: './teamStudentMappings.component.html',
  styleUrls: ['./teamStudentMappings.component.css'],
  providers:[TeamStudentMappingService]
})
export class TeamStudentMappingsComponent implements OnInit {

  constructor(private teamStudentMappingService : TeamStudentMappingService) { }

  ngOnInit() {
  }

}
