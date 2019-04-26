import { Component, OnInit } from '@angular/core';
import { appconstants } from 'src/common/appconstants';
import { RoleScreenMappingService } from 'src/roleScreenMappings/shared/roleScreenMapping.service';


@Component({
  selector: 'gstar-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  providers:[RoleScreenMappingService]
})
export class SidebarComponent implements OnInit {
  counter: number = 0;
  constructor(public roleScreenMappingService: RoleScreenMappingService) { this.counter = 0; }
  loginStatus: boolean;
  ngOnInit() {
    this.counter = 0;
    this.loginStatus = appconstants.loginStatus;
  }

  checkFunction(ScreenName : string): boolean {  
    if( appconstants.logoutCalled==true)
    {
      appconstants.logoutCalled=false;
      appconstants.GlobalRoleId =0;
      this.roleScreenMappingService.roleScreenMappingListById=null;
    }

    if(this.roleScreenMappingService.roleScreenMappingListById==null)
    {
      if(appconstants.GlobalRoleId!==0)
      {
if(this.counter>100)
{
  this.counter=0;
}

        this.counter = this.counter + 1;

        //console.log("counter: " + this.counter);
        if(this.counter<2)
        {
         // console.log("called getRoleScreenMappingListById: " + this.counter);
          this.roleScreenMappingService.getRoleScreenMappingListById();
        }
      }
       return null;
    }
    //console.log('sidebar: ' + ScreenName + " RoleId:" + appconstants.GlobalRoleId);
    return this.roleScreenMappingService.roleScreenMappingListById.filter(r=>r.ScreenName.toLowerCase()==ScreenName.toLowerCase()).length > 0;
  }
}
