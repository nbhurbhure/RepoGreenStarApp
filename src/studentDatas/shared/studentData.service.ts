import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {StudentData} from'./studentDatamodel';
import {appconstants} from 'src/common/appconstants';
import {YearInfo} from 'src/yearInfos/shared/yearInfomodel';
import {MonthInfo} from 'src/monthInfos/shared/monthInfomodel';
import {DayInfo} from 'src/dayInfos/shared/dayInfomodel';
import {Student} from 'src/students/shared/studentmodel';
import {Parameter} from 'src/parameters/shared/parametermodel';

@Injectable()
export class StudentDataService {

  selectedStudentData : StudentData;
  studentDataList : StudentData[];
  objYearInfoList : YearInfo[];
  objMonthInfoList : MonthInfo[];
  objDayInfoList : DayInfo[];
  objStudentList : Student[];
  objParameterList : Parameter[];
  objFilteredMonthInfoList : MonthInfo[];
  objFilteredDayInfoList : DayInfo[];
  
  constructor(private http : Http) { }

  postStudentData(objStudentData : StudentData){
    var body = JSON.stringify(objStudentData);
    var headerOptions = new Headers({'Access-Control-Allow-Origin': '*','Content-Type':'application/json'});
    var requestOptions = new RequestOptions({method : RequestMethod.Post,headers : headerOptions});
    return this.http.post(appconstants.API_URL + 'StudentData/',body,requestOptions).map(x => x.json());
  }

  putStudentData(id, objStudentData) {
    var body = JSON.stringify(objStudentData);
    var headerOptions = new Headers({'Access-Control-Allow-Origin': '*', 'Content-Type':'application/json'});
    var requestOptions = new RequestOptions({ method: RequestMethod.Put, headers: headerOptions });
    return this.http.put(appconstants.API_URL + 'StudentData/' + id,
      body,
      requestOptions).map(res => res.json());
  }
  getStudentDataList(){
    this.http.get(appconstants.API_URL + 'StudentData/' + appconstants.GlobalSchoolId)
    .map((data : Response) =>{
      return data.json() as StudentData[];
    }).toPromise().then(x => {
      this.studentDataList = x;
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
  getStudentList() {
    this.http.get(appconstants.API_URL + 'Student')
    .map((data : Response) =>{
      return data.json() as Student[];
    }).toPromise().then(x => {
      this.objStudentList = x;
    })
  }
  getParameterList() {
    this.http.get(appconstants.API_URL + 'Parameter')
    .map((data : Response) =>{
      return data.json() as Parameter[];
    }).toPromise().then(x => {
      this.objParameterList = x;
    })
  }
  deleteStudentData(id: number) {
    return this.http.delete(appconstants.API_URL + 'StudentData/' + id).map(res => res.json());
  }
}

