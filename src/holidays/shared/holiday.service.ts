import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {Holiday} from'./holiday.model';
import {appconstants} from 'src/common/appconstants';
import {HolidayType} from 'src/HolidayTypes/shared/HolidayType.model'
import {YearInfo} from 'src/YearInfos/shared/YearInfo.model'
import {MonthInfo} from 'src/MonthInfos/shared/MonthInfo.model'
import {DayInfo} from 'src/DayInfos/shared/DayInfo.model'
import {School} from 'src/Schools/shared/School.model'

@Injectable()
export class HolidayService {

  selectedHoliday : Holiday;
  holidayList : Holiday[];
  objHolidayTypeList : HolidayType[];
  objYearInfoList : YearInfo[];
  objMonthInfoList : MonthInfo[];
  objDayInfoList : DayInfo[];
  objSchoolList : School[];

  constructor(private http : Http) { }

  postHoliday(objHoliday : Holiday){
    var body = JSON.stringify(objHoliday);
    var headerOptions = new Headers({'Access-Control-Allow-Origin': '*','Content-Type':'application/json'});
    var requestOptions = new RequestOptions({method : RequestMethod.Post,headers : headerOptions});
    return this.http.post(appconstants.API_URL + 'Holiday/',body,requestOptions).map(x => x.json());
  }

  putHoliday(id, objHoliday) {
    var body = JSON.stringify(objHoliday);
    var headerOptions = new Headers({'Access-Control-Allow-Origin': '*', 'Content-Type':'application/json'});
    var requestOptions = new RequestOptions({ method: RequestMethod.Put, headers: headerOptions });
    return this.http.put(appconstants.API_URL + 'Holiday/' + id,
      body,
      requestOptions).map(res => res.json());
  }
  getHolidayList(){
    this.http.get(appconstants.API_URL + 'Holiday/' + appconstants.GlobalSchoolId)
    .map((data : Response) =>{
      return data.json() as Holiday[];
    }).toPromise().then(x => {
      this.holidayList = x;
    })
  }

  getHolidayTypeList() {
    this.http.get(appconstants.API_URL + 'HolidayType')
    .map((data : Response) =>{
      return data.json() as HolidayType[];
    }).toPromise().then(x => {
      this.objHolidayTypeList = x;
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
  getMonthInfoList() {
    this.http.get(appconstants.API_URL + 'MonthInfo')
    .map((data : Response) =>{
      return data.json() as MonthInfo[];
    }).toPromise().then(x => {
      this.objMonthInfoList = x;
    })
  }
  getDayInfoList() {
    this.http.get(appconstants.API_URL + 'DayInfo')
    .map((data : Response) =>{
      return data.json() as DayInfo[];
    }).toPromise().then(x => {
      this.objDayInfoList = x;
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
  deleteHoliday(id: number) {
    return this.http.delete(appconstants.API_URL + 'Holiday/' + id).map(res => res.json());
  }
}

