import { Component, OnInit } from '@angular/core';

import {VroleService} from './shared/vrole.service'
@Component({
  selector: 'app-vroles',
  templateUrl: './vroles.component.html',
  styleUrls: ['./vroles.component.css'],
  providers:[VroleService]
})
export class VrolesComponent implements OnInit {

  constructor(private vroleService : VroleService) { }

  ngOnInit() {
  }

}
