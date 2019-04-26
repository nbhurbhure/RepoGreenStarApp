import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {RoleScreenMapping} from'./roleScreenMapping.model';
import {appconstants} from 'src/common/appconstants';
import {Vrole} from 'src/Vroles/shared/Vrole.model'
import {Screen} from 'src/Screens/shared/Screen.model'

@Injectable()
export class RoleScreenMappingService {

  selectedRoleScreenMapping : RoleScreenMapping;
  roleScreenMappingList : RoleScreenMapping[];
  roleScreenMappingListById : RoleScreenMapping[];
  objVroleList : Vrole[];
  objScreenList : Screen[];

  constructor(private http : Http) { }

  postRoleScreenMapping(objRoleScreenMapping : RoleScreenMapping){
    var body = JSON.stringify(objRoleScreenMapping);
    var headerOptions = new Headers({'Access-Control-Allow-Origin': '*','Content-Type':'application/json'});
    var requestOptions = new RequestOptions({method : RequestMethod.Post,headers : headerOptions});
    return this.http.post(appconstants.API_URL + 'RoleScreenMapping/',body,requestOptions).map(x => x.json());
  }

  putRoleScreenMapping(id, objRoleScreenMapping) {
    var body = JSON.stringify(objRoleScreenMapping);
    var headerOptions = new Headers({'Access-Control-Allow-Origin': '*', 'Content-Type':'application/json'});
    var requestOptions = new RequestOptions({ method: RequestMethod.Put, headers: headerOptions });
    return this.http.put(appconstants.API_URL + 'RoleScreenMapping/' + id,
      body,
      requestOptions).map(res => res.json());
  }
  getRoleScreenMappingList(){
    this.http.get(appconstants.API_URL + 'RoleScreenMapping')
    .map((data : Response) =>{
      return data.json() as RoleScreenMapping[];
    }).toPromise().then(x => {
      this.roleScreenMappingList = x;
    })
  }

  getRoleScreenMappingListById(){
    this.http.get(appconstants.API_URL + 'RoleScreenMapping/' + appconstants.GlobalRoleId)
    .map((data : Response) =>{
      return data.json() as RoleScreenMapping[];
    }).toPromise().then(x => {
      this.roleScreenMappingListById = x;
    })
  }

  getVroleList() {
    this.http.get(appconstants.API_URL + 'Vrole')
    .map((data : Response) =>{
      return data.json() as Vrole[];
    }).toPromise().then(x => {
      this.objVroleList = x;
    })
  }
  getScreenList() {
    this.http.get(appconstants.API_URL + 'Screen')
    .map((data : Response) =>{
      return data.json() as Screen[];
    }).toPromise().then(x => {
      this.objScreenList = x;
    })
  }
  deleteRoleScreenMapping(id: number) {
    return this.http.delete(appconstants.API_URL + 'RoleScreenMapping/' + id).map(res => res.json());
  }
}

