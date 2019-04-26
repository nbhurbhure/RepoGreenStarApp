import { Component, OnInit } from '@angular/core';

import {ScreenService} from './shared/screen.service'
@Component({
  selector: 'app-screens',
  templateUrl: './screens.component.html',
  styleUrls: ['./screens.component.css'],
  providers:[ScreenService]
})
export class ScreensComponent implements OnInit {

  constructor(private screenService : ScreenService) { }

  ngOnInit() {
  }

}
