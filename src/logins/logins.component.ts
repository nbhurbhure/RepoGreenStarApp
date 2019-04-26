import { Component, OnInit } from '@angular/core';

import {LoginService} from './shared/login.service'
@Component({
  selector: 'app-logins',
  templateUrl: './logins.component.html',
  styleUrls: ['./logins.component.css'],
  providers:[LoginService]
})
export class LoginsComponent implements OnInit {

  constructor(private loginService : LoginService) { }

  ngOnInit() {
  }

}
