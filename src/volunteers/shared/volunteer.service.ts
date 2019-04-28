import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {Volunteer} from'./volunteermodel';
import {appconstants} from 'src/common/appconstants';
import {Vrole} from 'src/vroles/shared/vrolemodel'
import {School} from 'src/schools/shared/schoolmodel'

@Injectable()
export class VolunteerService {

  selectedVolunteer : Volunteer;
  volunteerList : Volunteer[];
  objVroleList : Vrole[];
  objSchoolList : School[];

  constructor(private http : Http) { }

  postVolunteer(objVolunteer : Volunteer){
    var body = JSON.stringify(objVolunteer);
    var headerOptions = new Headers({'Access-Control-Allow-Origin': '*','Content-Type':'application/json'});
    var requestOptions = new RequestOptions({method : RequestMethod.Post,headers : headerOptions});
    return this.http.post(appconstants.API_URL + 'Volunteer/',body,requestOptions).map(x => x.json());
  }

  putVolunteer(id, objVolunteer) {
    var body = JSON.stringify(objVolunteer);
    var headerOptions = new Headers({'Access-Control-Allow-Origin': '*', 'Content-Type':'application/json'});
    var requestOptions = new RequestOptions({ method: RequestMethod.Put, headers: headerOptions });
    return this.http.put(appconstants.API_URL + 'Volunteer/' + id,
      body,
      requestOptions).map(res => res.json());
  }
  getVolunteerList(){
    this.http.get(appconstants.API_URL + 'Volunteer')
    .map((data : Response) =>{
      return data.json() as Volunteer[];
    }).toPromise().then(x => {
      this.volunteerList = x;
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
  getSchoolList() {
    this.http.get(appconstants.API_URL + 'School')
    .map((data : Response) =>{
      return data.json() as School[];
    }).toPromise().then(x => {
      this.objSchoolList = x;
    })
  }
  deleteVolunteer(id: number) {
    return this.http.delete(appconstants.API_URL + 'Volunteer/' + id).map(res => res.json());
  }
}

