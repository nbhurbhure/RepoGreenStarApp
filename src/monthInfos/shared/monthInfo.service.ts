import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {MonthInfo} from'./monthInfomodel';
import {appconstants} from 'src/common/appconstants';
import {YearInfo} from 'src/yearInfos/shared/yearInfomodel';

@Injectable()
export class MonthInfoService {

  selectedMonthInfo : MonthInfo;
  monthInfoList : MonthInfo[];
  objYearInfoList : YearInfo[];

  constructor(private http : Http) { }

  postMonthInfo(objMonthInfo : MonthInfo){
    var body = JSON.stringify(objMonthInfo);
    var headerOptions = new Headers({'Access-Control-Allow-Origin': '*','Content-Type':'application/json'});
    var requestOptions = new RequestOptions({method : RequestMethod.Post,headers : headerOptions});
    return this.http.post(appconstants.API_URL + 'MonthInfo/',body,requestOptions).map(x => x.json());
  }

  putMonthInfo(id, objMonthInfo) {
    var body = JSON.stringify(objMonthInfo);
    var headerOptions = new Headers({'Access-Control-Allow-Origin': '*', 'Content-Type':'application/json'});
    var requestOptions = new RequestOptions({ method: RequestMethod.Put, headers: headerOptions });
    return this.http.put(appconstants.API_URL + 'MonthInfo/' + id,
      body,
      requestOptions).map(res => res.json());
  }
  getMonthInfoList(){
    this.http.get(appconstants.API_URL + 'MonthInfo/' + appconstants.GlobalYearInfoId)
    .map((data : Response) =>{
      return data.json() as MonthInfo[];
    }).toPromise().then(x => {
      this.monthInfoList = x;
    })
  }

  getYearInfoList() {
    this.http.get(appconstants.API_URL + 'YearInfo')
    .map((data : Response) =>{
      return data.json() as YearInfo[];
    }).toPromise().then(x => {
      this.objYearInfoList = x;
    })
  }
  deleteMonthInfo(id: number) {
    return this.http.delete(appconstants.API_URL + 'MonthInfo/' + id).map(res => res.json());
  }
}

