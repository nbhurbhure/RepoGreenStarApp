import { Component, OnInit } from '@angular/core';

import {SchoolService} from './shared/school.service'
@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.css'],
  providers:[SchoolService]
})
export class SchoolsComponent implements OnInit {

  constructor(private schoolService : SchoolService) { }

  ngOnInit() {
  }

}
