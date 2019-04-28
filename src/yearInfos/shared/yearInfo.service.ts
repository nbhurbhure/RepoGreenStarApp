import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {YearInfo} from'./yearInfomodel';
import {appconstants} from 'src/common/appconstants';

@Injectable()
export class YearInfoService {

  selectedYearInfo : YearInfo;
  yearInfoList : YearInfo[];

  constructor(private http : Http) { }

  postYearInfo(objYearInfo : YearInfo){
    var body = JSON.stringify(objYearInfo);
    var headerOptions = new Headers({'Access-Control-Allow-Origin': '*','Content-Type':'application/json'});
    var requestOptions = new RequestOptions({method : RequestMethod.Post,headers : headerOptions});
    return this.http.post(appconstants.API_URL + 'YearInfo/',body,requestOptions).map(x => x.json());
  }

  putYearInfo(id, objYearInfo) {
    var body = JSON.stringify(objYearInfo);
    var headerOptions = new Headers({'Access-Control-Allow-Origin': '*', 'Content-Type':'application/json'});
    var requestOptions = new RequestOptions({ method: RequestMethod.Put, headers: headerOptions });
    return this.http.put(appconstants.API_URL + 'YearInfo/' + id,
      body,
      requestOptions).map(res => res.json());
  }
  getYearInfoList(){
    this.http.get(appconstants.API_URL + 'YearInfo')
    .map((data : Response) =>{
      return data.json() as YearInfo[];
    }).toPromise().then(x => {
      this.yearInfoList = x;
    })
  }

  deleteYearInfo(id: number) {
    return this.http.delete(appconstants.API_URL + 'YearInfo/' + id).map(res => res.json());
  }
}

