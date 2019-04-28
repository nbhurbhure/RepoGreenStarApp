import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {Login} from'./loginmodel';
import {appconstants} from 'src/common/appconstants';
import {Outreach} from 'src/outreachs/shared/outreachmodel';
import {City} from 'src/citys/shared/citymodel';
import {School} from 'src/schools/shared/schoolmodel';

@Injectable()
export class LoginService {

  selectedLogin : Login;
  loginList : Login[];
  objOutreachList : Outreach[];
  objCityList : City[];
  objSchoolList : School[];
  objFilteredCityList : City[];
  objFilteredSchoolList : School[];
  
  constructor(private http : Http) { }

  postLogin(objLogin : Login){
    var body = JSON.stringify(objLogin);
    var headerOptions = new Headers({'Access-Control-Allow-Origin': '*','Content-Type':'application/json'});
    var requestOptions = new RequestOptions({method : RequestMethod.Post,headers : headerOptions});
    return this.http.post(appconstants.API_URL + 'Login/',body,requestOptions).map(x => x.json());
  }

  putLogin(id, objLogin) {
    var body = JSON.stringify(objLogin);
    var headerOptions = new Headers({'Access-Control-Allow-Origin': '*', 'Content-Type':'application/json'});
    var requestOptions = new RequestOptions({ method: RequestMethod.Put, headers: headerOptions });
    return this.http.put(appconstants.API_URL + 'Login/' + id,
      body,
      requestOptions).map(res => res.json());
  }
  getLoginList(){
    this.http.get(appconstants.API_URL + 'Login')
    .map((data : Response) =>{
      return data.json() as Login[];
    }).toPromise().then(x => {
      this.loginList = x;
    })
  }

  getOutreachList() {
    this.http.get(appconstants.API_URL + 'Outreach')
    .map((data : Response) =>{
      return data.json() as Outreach[];
    }).toPromise().then(x => {
      this.objOutreachList = x;
    })
  }
  getCityList() {
    this.http.get(appconstants.API_URL + 'City')
    .map((data : Response) =>{
      return data.json() as City[];
    }).toPromise().then(x => {
      this.objCityList = x;
    })
  }
  getSchoolList() {
    this.http.get(appconstants.API_URL + 'School')
    .map((data : Response) =>{
      return data.json() as School[];
    }).toPromise().then(x => {
      this.objSchoolList = x;
    })
  }
  deleteLogin(id: number) {
    return this.http.delete(appconstants.API_URL + 'Login/' + id).map(res => res.json());
  }
}

