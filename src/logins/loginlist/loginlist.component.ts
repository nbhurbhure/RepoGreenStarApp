import { Component, OnInit } from '@angular/core';

import { LoginService } from '../shared/login.service'
import { Login } from '../shared/loginmodel';
import { ToastrService } from 'ngx-toastr';   

@Component({
  selector: 'app-login-list',
  templateUrl: './loginlist.component.html',
  styleUrls: ['./loginlist.component.css']
})
export class LoginListComponent implements OnInit {

  constructor(private loginService: LoginService,private toastr : ToastrService) { }

  ngOnInit() {
    this.loginService.getLoginList();
  }

  showForEdit(objLogin: Login) {    
    this.loginService.selectedLogin = Object.assign({}, objLogin);
    if(this.loginService.selectedLogin.Id != null)
    {
    } 
  }

  onDelete(id: number) {    
    if (confirm('Are you sure to delete this record ?') == true) {
      this.loginService.deleteLogin(id)
      .subscribe(x => {
        this.loginService.getLoginList();
        this.toastr.warning("Deleted Successfully","Login Register");
      })
    }
  }
}
