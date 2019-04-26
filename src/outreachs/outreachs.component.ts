import { Component, OnInit } from '@angular/core';

import {OutreachService} from './shared/outreach.service'
@Component({
  selector: 'app-outreachs',
  templateUrl: './outreachs.component.html',
  styleUrls: ['./outreachs.component.css'],
  providers:[OutreachService]
})
export class OutreachsComponent implements OnInit {

  constructor(private outreachService : OutreachService) { }

  ngOnInit() {
  }

}
