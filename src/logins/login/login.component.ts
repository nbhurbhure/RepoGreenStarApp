import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from '../shared/login.service';
import { ToastrService } from 'ngx-toastr';
import { appconstants } from 'src/common/appconstants';
import { VolunteerService } from 'src/volunteers/shared/volunteer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[VolunteerService]
})
export class LoginComponent implements OnInit {
    
  constructor(private loginService: LoginService, private toastr: ToastrService, public router: Router, public volunteerService: VolunteerService) { }
     
  counter: number;
  ngOnInit() {
    this.resetForm();     
    }

  resetForm(form?: NgForm) {
    if (form != null)
    {
      form.reset();
    }
    this.loginService.selectedLogin = {
      Id: null,
      UserNam: '',
      Password: null,
      OutreachName: '',
      CityName: '',
      SchoolName: '',
      FOutreachId: null,
      FCityId: null,
      FSchoolId: null,
    }      
    this.loginService.getOutreachList(); 
    this.loginService.getCityList(); 
    this.loginService.getSchoolList(); 
    this.volunteerService.getVolunteerList();
  }

  OnOutreachChange(event)
  {
    this.loginService.objFilteredCityList = this.loginService.objCityList.filter(r=>r.FOutreachId==event)  
    this.loginService.selectedLogin.FSchoolId = null;
  }

  OnCityChange(event)
 {
   //console.log(event);
   this.loginService.objFilteredSchoolList = this.loginService.objSchoolList.filter(r=>r.FCityId==event)    
 }


 onSubmit(form: NgForm) {  
  this.counter = 0;
 // console.log(this.volunteerService.volunteerList + ", Name: " + form.value.UserNam + ", Password: "+ form.value.Password);
  this.volunteerService.volunteerList.forEach(element => {
    if(element.Name==form.value.UserNam && element.VPassword == form.value.Password )
    {
      this.counter = 1;
      appconstants.GlobalRoleId = element.FVroleId;
      appconstants.loginStatus = true;
    }
  });

  if(this.counter==0)
  {
    this.toastr.error('Invalid Login attempt.', 'Invalid Login');
    //appconstants.loginStatus=false;
  }
  else if(this.counter==2)
  {
    this.toastr.error('Not Authorized.', 'Invalid Login');
   // appconstants.loginStatus=false;
  }
  else
  {
    this.toastr.success('Login attempt successful.', 'Login success');
    this.router.navigateByUrl('/dashboard');
  }

}



}

