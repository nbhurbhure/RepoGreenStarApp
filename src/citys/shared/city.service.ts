import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {City} from'./city.model';
import {appconstants} from 'src/common/appconstants';
import {Outreach} from 'src/Outreachs/shared/Outreach.model'

@Injectable()
export class CityService {

  selectedCity : City;
  cityList : City[];
  objOutreachList : Outreach[];

  constructor(private http : Http) { }

  postCity(objCity : City){
    var body = JSON.stringify(objCity);
    var headerOptions = new Headers({'Access-Control-Allow-Origin': '*','Content-Type':'application/json'});
    var requestOptions = new RequestOptions({method : RequestMethod.Post,headers : headerOptions});
    return this.http.post(appconstants.API_URL + 'City/',body,requestOptions).map(x => x.json());
  }

  putCity(id, objCity) {
    var body = JSON.stringify(objCity);
    var headerOptions = new Headers({'Access-Control-Allow-Origin': '*', 'Content-Type':'application/json'});
    var requestOptions = new RequestOptions({ method: RequestMethod.Put, headers: headerOptions });
    return this.http.put(appconstants.API_URL + 'City/' + id,
      body,
      requestOptions).map(res => res.json());
  }
  getCityList(){
    this.http.get(appconstants.API_URL + 'City')
    .map((data : Response) =>{
      return data.json() as City[];
    }).toPromise().then(x => {
      this.cityList = x;
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
  deleteCity(id: number) {
    return this.http.delete(appconstants.API_URL + 'City/' + id).map(res => res.json());
  }
}

