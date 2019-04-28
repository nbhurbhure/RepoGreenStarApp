import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {WeekInfo} from'./weekInfomodel';
import {appconstants} from 'src/common/appconstants';
import {School} from 'src/schools/shared/schoolmodel'

@Injectable()
export class WeekInfoService {

  selectedWeekInfo : WeekInfo;
  weekInfoList : WeekInfo[];
  objSchoolList : School[];

  constructor(private http : Http) { }

  postWeekInfo(objWeekInfo : WeekInfo){
    var body = JSON.stringify(objWeekInfo);
    var headerOptions = new Headers({'Access-Control-Allow-Origin': '*','Content-Type':'application/json'});
    var requestOptions = new RequestOptions({method : RequestMethod.Post,headers : headerOptions});
    return this.http.post(appconstants.API_URL + 'WeekInfo/',body,requestOptions).map(x => x.json());
  }

  putWeekInfo(id, objWeekInfo) {
    var body = JSON.stringify(objWeekInfo);
    var headerOptions = new Headers({'Access-Control-Allow-Origin': '*', 'Content-Type':'application/json'});
    var requestOptions = new RequestOptions({ method: RequestMethod.Put, headers: headerOptions });
    return this.http.put(appconstants.API_URL + 'WeekInfo/' + id,
      body,
      requestOptions).map(res => res.json());
  }
  getWeekInfoList(){
    this.http.get(appconstants.API_URL + 'WeekInfo/' + appconstants.GlobalSchoolId)
    .map((data : Response) =>{
      return data.json() as WeekInfo[];
    }).toPromise().then(x => {
      this.weekInfoList = x;
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
  deleteWeekInfo(id: number) {
    return this.http.delete(appconstants.API_URL + 'WeekInfo/' + id).map(res => res.json());
  }
}

