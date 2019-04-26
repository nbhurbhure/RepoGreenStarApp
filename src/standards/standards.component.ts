import { Component, OnInit } from '@angular/core';

import {StandardService} from './shared/standard.service'
@Component({
  selector: 'app-standards',
  templateUrl: './standards.component.html',
  styleUrls: ['./standards.component.css'],
  providers:[StandardService]
})
export class StandardsComponent implements OnInit {

  constructor(private standardService : StandardService) { }

  ngOnInit() {
  }

}
