import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {TeamStudentMapping} from'./teamStudentMapping.model';
import {appconstants} from 'src/common/appconstants';
import {Team} from 'src/Teams/shared/Team.model'
import {Student} from 'src/Students/shared/Student.model'

@Injectable()
export class TeamStudentMappingService {

  selectedTeamStudentMapping : TeamStudentMapping;
  teamStudentMappingList : TeamStudentMapping[];
  objTeamList : Team[];
  objStudentList : Student[];

  constructor(private http : Http) { }

  postTeamStudentMapping(objTeamStudentMapping : TeamStudentMapping){
    var body = JSON.stringify(objTeamStudentMapping);
    var headerOptions = new Headers({'Access-Control-Allow-Origin': '*','Content-Type':'application/json'});
    var requestOptions = new RequestOptions({method : RequestMethod.Post,headers : headerOptions});
    return this.http.post(appconstants.API_URL + 'TeamStudentMapping/',body,requestOptions).map(x => x.json());
  }

  putTeamStudentMapping(id, objTeamStudentMapping) {
    var body = JSON.stringify(objTeamStudentMapping);
    var headerOptions = new Headers({'Access-Control-Allow-Origin': '*', 'Content-Type':'application/json'});
    var requestOptions = new RequestOptions({ method: RequestMethod.Put, headers: headerOptions });
    return this.http.put(appconstants.API_URL + 'TeamStudentMapping/' + id,
      body,
      requestOptions).map(res => res.json());
  }
  getTeamStudentMappingList(){
    this.http.get(appconstants.API_URL + 'TeamStudentMapping/' + appconstants.GlobalSchoolId)
    .map((data : Response) =>{
      return data.json() as TeamStudentMapping[];
    }).toPromise().then(x => {
      this.teamStudentMappingList = x;
    })
  }

  getTeamList() {
    this.http.get(appconstants.API_URL + 'Team')
    .map((data : Response) =>{
      return data.json() as Team[];
    }).toPromise().then(x => {
      this.objTeamList = x;
    })
  }
  getStudentList() {
    this.http.get(appconstants.API_URL + 'Student')
    .map((data : Response) =>{
      return data.json() as Student[];
    }).toPromise().then(x => {
      this.objStudentList = x;
    })
  }
  deleteTeamStudentMapping(id: number) {
    return this.http.delete(appconstants.API_URL + 'TeamStudentMapping/' + id).map(res => res.json());
  }
}

