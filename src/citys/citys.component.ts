import { Component, OnInit } from '@angular/core';

import {CityService} from './shared/city.service'
@Component({
  selector: 'app-citys',
  templateUrl: './citys.component.html',
  styleUrls: ['./citys.component.css'],
  providers:[CityService]
})
export class CitysComponent implements OnInit {

  constructor(private cityService : CityService) { }

  ngOnInit() {
  }

}
