import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { appconstants } from 'src/common/appconstants';
import { RoleScreenMappingService } from 'src/roleScreenMappings/shared/roleScreenMapping.service';


@Component(
  {
    selector: 'gstar-header', templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    providers: [RoleScreenMappingService]
  })
export class HeaderComponent implements OnInit {
  counter: number = 0;
  constructor(public router: Router, public roleScreenMappingService: RoleScreenMappingService) { this.counter = 0; }
  loginStatus: boolean; ngOnInit() {
    this.counter = 0;
    this.loginStatus = appconstants.loginStatus;
  }

checkFunction(ScreenName : string): boolean {  

  if(this.roleScreenMappingService.roleScreenMappingListById==null)
  {
    if(appconstants.GlobalRoleId!==0)
    {
      this.counter = this.counter + 1;

      console.log("header counter: " + this.counter);
      if(this.counter<2)
      {
        console.log("called header getRoleScreenMappingListById: " + this.counter);
        this.roleScreenMappingService.getRoleScreenMappingListById();
      }
    }
     return null;
  }
  console.log('sidebar: ' + ScreenName + " RoleId:" + appconstants.GlobalRoleId);
  return this.roleScreenMappingService.roleScreenMappingListById.filter(r=>r.ScreenName.toLowerCase()==ScreenName.toLowerCase()).length > 0;
}

  logoutForm() {
    appconstants.logoutCalled = true;
    this.counter=0;
    appconstants.GlobalRoleId = 0; 
    this.roleScreenMappingService.roleScreenMappingListById = null;
    this.router.navigateByUrl('/logins');
  }
}