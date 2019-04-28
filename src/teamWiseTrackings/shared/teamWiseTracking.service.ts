import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {TeamWiseTracking} from'./teamWiseTrackingmodel';
import {appconstants} from 'src/common/appconstants';

@Injectable()
export class TeamWiseTrackingService {

  selectedTeamWiseTracking : TeamWiseTracking;
  teamWiseTrackingList : TeamWiseTracking[];

  constructor(private http : Http) { }

  postTeamWiseTracking(objTeamWiseTracking : TeamWiseTracking){
    var body = JSON.stringify(objTeamWiseTracking);
    var headerOptions = new Headers({'Access-Control-Allow-Origin': '*','Content-Type':'application/json'});
    var requestOptions = new RequestOptions({method : RequestMethod.Post,headers : headerOptions});
    return this.http.post(appconstants.API_URL + 'TeamWiseTracking/',body,requestOptions).map(x => x.json());
  }

  putTeamWiseTracking(id, objTeamWiseTracking) {
    var body = JSON.stringify(objTeamWiseTracking);
    var headerOptions = new Headers({'Access-Control-Allow-Origin': '*', 'Content-Type':'application/json'});
    var requestOptions = new RequestOptions({ method: RequestMethod.Put, headers: headerOptions });
    return this.http.put(appconstants.API_URL + 'TeamWiseTracking/' + id,
      body,
      requestOptions).map(res => res.json());
  }
  getTeamWiseTrackingList(){
    this.http.get(appconstants.API_URL + 'TeamWiseTracking')
    .map((data : Response) =>{
      return data.json() as TeamWiseTracking[];
    }).toPromise().then(x => {
      this.teamWiseTrackingList = x;
    })
  }

  deleteTeamWiseTracking(id: number) {
    return this.http.delete(appconstants.API_URL + 'TeamWiseTracking/' + id).map(res => res.json());
  }
}

