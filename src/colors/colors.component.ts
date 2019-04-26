import { Component, OnInit } from '@angular/core';

import {ColorService} from './shared/color.service'
@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.css'],
  providers:[ColorService]
})
export class ColorsComponent implements OnInit {

  constructor(private colorService : ColorService) { }

  ngOnInit() {
  }

}
