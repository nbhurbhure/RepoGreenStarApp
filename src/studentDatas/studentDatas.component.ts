import { Component, OnInit } from '@angular/core';

import {StudentDataService} from './shared/studentData.service'
@Component({
  selector: 'app-studentDatas',
  templateUrl: './studentDatas.component.html',
  styleUrls: ['./studentDatas.component.css'],
  providers:[StudentDataService]
})
export class StudentDatasComponent implements OnInit {

  constructor(private studentDataService : StudentDataService) { }

  ngOnInit() {
  }

}
