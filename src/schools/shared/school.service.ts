import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {School} from'./school.model';
import {appconstants} from 'src/common/appconstants';
import {City} from 'src/Citys/shared/City.model'

@Injectable()
export class SchoolService {

  selectedSchool : School;
  schoolList : School[];
  objCityList : City[];

  constructor(private http : Http) { }

  postSchool(objSchool : School){
    var body = JSON.stringify(objSchool);
    var headerOptions = new Headers({'Access-Control-Allow-Origin': '*','Content-Type':'application/json'});
    var requestOptions = new RequestOptions({method : RequestMethod.Post,headers : headerOptions});
    return this.http.post(appconstants.API_URL + 'School/',body,requestOptions).map(x => x.json());
  }

  putSchool(id, objSchool) {
    var body = JSON.stringify(objSchool);
    var headerOptions = new Headers({'Access-Control-Allow-Origin': '*', 'Content-Type':'application/json'});
    var requestOptions = new RequestOptions({ method: RequestMethod.Put, headers: headerOptions });
    return this.http.put(appconstants.API_URL + 'School/' + id,
      body,
      requestOptions).map(res => res.json());
  }
  getSchoolList(){
    this.http.get(appconstants.API_URL + 'School')
    .map((data : Response) =>{
      return data.json() as School[];
    }).toPromise().then(x => {
      this.schoolList = x;
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
  deleteSchool(id: number) {
    return this.http.delete(appconstants.API_URL + 'School/' + id).map(res => res.json());
  }
}

