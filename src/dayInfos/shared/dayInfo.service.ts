import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {DayInfo} from'./dayInfo.model';
import {appconstants} from 'src/common/appconstants';
import {MonthInfo} from 'src/MonthInfos/shared/MonthInfo.model'

@Injectable()
export class DayInfoService {

  selectedDayInfo : DayInfo;
  dayInfoList : DayInfo[];
  objMonthInfoList : MonthInfo[];

  constructor(private http : Http) { }

  postDayInfo(objDayInfo : DayInfo){
    var body = JSON.stringify(objDayInfo);
    var headerOptions = new Headers({'Access-Control-Allow-Origin': '*','Content-Type':'application/json'});
    var requestOptions = new RequestOptions({method : RequestMethod.Post,headers : headerOptions});
    return this.http.post(appconstants.API_URL + 'DayInfo/',body,requestOptions).map(x => x.json());
  }

  putDayInfo(id, objDayInfo) {
    var body = JSON.stringify(objDayInfo);
    var headerOptions = new Headers({'Access-Control-Allow-Origin': '*', 'Content-Type':'application/json'});
    var requestOptions = new RequestOptions({ method: RequestMethod.Put, headers: headerOptions });
    return this.http.put(appconstants.API_URL + 'DayInfo/' + id,
      body,
      requestOptions).map(res => res.json());
  }
  getDayInfoList(){
    this.http.get(appconstants.API_URL + 'DayInfo/' + appconstants.GlobalYearInfoId)
    .map((data : Response) =>{
      return data.json() as DayInfo[];
    }).toPromise().then(x => {
      this.dayInfoList = x;
    })
  }

  getMonthInfoList() {
    this.http.get(appconstants.API_URL + 'MonthInfo')
    .map((data : Response) =>{
      return data.json() as MonthInfo[];
    }).toPromise().then(x => {
      this.objMonthInfoList = x;
    })
  }
  deleteDayInfo(id: number) {
    return this.http.delete(appconstants.API_URL + 'DayInfo/' + id).map(res => res.json());
  }
}

