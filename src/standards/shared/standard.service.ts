import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {Standard} from'./standardmodel';
import {appconstants} from 'src/common/appconstants';
import {School} from 'src/schools/shared/schoolmodel';

@Injectable()
export class StandardService {

  selectedStandard : Standard;
  standardList : Standard[];
  objSchoolList : School[];

  constructor(private http : Http) { }

  postStandard(objStandard : Standard){
    var body = JSON.stringify(objStandard);
    var headerOptions = new Headers({'Access-Control-Allow-Origin': '*','Content-Type':'application/json'});
    var requestOptions = new RequestOptions({method : RequestMethod.Post,headers : headerOptions});
    return this.http.post(appconstants.API_URL + 'Standard/',body,requestOptions).map(x => x.json());
  }

  putStandard(id, objStandard) {
    var body = JSON.stringify(objStandard);
    var headerOptions = new Headers({'Access-Control-Allow-Origin': '*', 'Content-Type':'application/json'});
    var requestOptions = new RequestOptions({ method: RequestMethod.Put, headers: headerOptions });
    return this.http.put(appconstants.API_URL + 'Standard/' + id,
      body,
      requestOptions).map(res => res.json());
  }
  getStandardList(){
    this.http.get(appconstants.API_URL + 'Standard/' + appconstants.GlobalSchoolId)
    .map((data : Response) =>{
      return data.json() as Standard[];
    }).toPromise().then(x => {
      this.standardList = x;
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
  deleteStandard(id: number) {
    return this.http.delete(appconstants.API_URL + 'Standard/' + id).map(res => res.json());
  }
}

