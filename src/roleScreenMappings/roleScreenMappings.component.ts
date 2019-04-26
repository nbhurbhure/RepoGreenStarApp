import { Component, OnInit } from '@angular/core';

import {RoleScreenMappingService} from './shared/roleScreenMapping.service'
@Component({
  selector: 'app-roleScreenMappings',
  templateUrl: './roleScreenMappings.component.html',
  styleUrls: ['./roleScreenMappings.component.css'],
  providers:[RoleScreenMappingService]
})
export class RoleScreenMappingsComponent implements OnInit {

  constructor(private roleScreenMappingService : RoleScreenMappingService) { }

  ngOnInit() {
  }

}
