import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {Team} from'./team.model';
import {appconstants} from 'src/common/appconstants';
import {Standard} from 'src/Standards/shared/Standard.model'

@Injectable()
export class TeamService {

  selectedTeam : Team;
  teamList : Team[];
  objStandardList : Standard[];

  constructor(private http : Http) { }

  postTeam(objTeam : Team){
    var body = JSON.stringify(objTeam);
    var headerOptions = new Headers({'Access-Control-Allow-Origin': '*','Content-Type':'application/json'});
    var requestOptions = new RequestOptions({method : RequestMethod.Post,headers : headerOptions});
    return this.http.post(appconstants.API_URL + 'Team/',body,requestOptions).map(x => x.json());
  }

  putTeam(id, objTeam) {
    var body = JSON.stringify(objTeam);
    var headerOptions = new Headers({'Access-Control-Allow-Origin': '*', 'Content-Type':'application/json'});
    var requestOptions = new RequestOptions({ method: RequestMethod.Put, headers: headerOptions });
    return this.http.put(appconstants.API_URL + 'Team/' + id,
      body,
      requestOptions).map(res => res.json());
  }
  getTeamList(){
    this.http.get(appconstants.API_URL + 'Team/' + appconstants.GlobalSchoolId)
    .map((data : Response) =>{
      return data.json() as Team[];
    }).toPromise().then(x => {
      this.teamList = x;
    })
  }

  getStandardList() {
    this.http.get(appconstants.API_URL + 'Standard')
    .map((data : Response) =>{
      return data.json() as Standard[];
    }).toPromise().then(x => {
      this.objStandardList = x;
    })
  }
  deleteTeam(id: number) {
    return this.http.delete(appconstants.API_URL + 'Team/' + id).map(res => res.json());
  }
}

