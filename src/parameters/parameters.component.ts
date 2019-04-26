import { Component, OnInit } from '@angular/core';

import {ParameterService} from './shared/parameter.service'
@Component({
  selector: 'app-parameters',
  templateUrl: './parameters.component.html',
  styleUrls: ['./parameters.component.css'],
  providers:[ParameterService]
})
export class ParametersComponent implements OnInit {

  constructor(private parameterService : ParameterService) { }

  ngOnInit() {
  }

}
