import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {Teacher} from'./teachermodel';
import {appconstants} from 'src/common/appconstants';
import {School} from 'src/schools/shared/schoolmodel';

@Injectable()
export class TeacherService {

  selectedTeacher : Teacher;
  teacherList : Teacher[];
  objSchoolList : School[];

  constructor(private http : Http) { }

  postTeacher(objTeacher : Teacher){
    var body = JSON.stringify(objTeacher);
    var headerOptions = new Headers({'Access-Control-Allow-Origin': '*','Content-Type':'application/json'});
    var requestOptions = new RequestOptions({method : RequestMethod.Post,headers : headerOptions});
    return this.http.post(appconstants.API_URL + 'Teacher/',body,requestOptions).map(x => x.json());
  }

  putTeacher(id, objTeacher) {
    var body = JSON.stringify(objTeacher);
    var headerOptions = new Headers({'Access-Control-Allow-Origin': '*', 'Content-Type':'application/json'});
    var requestOptions = new RequestOptions({ method: RequestMethod.Put, headers: headerOptions });
    return this.http.put(appconstants.API_URL + 'Teacher/' + id,
      body,
      requestOptions).map(res => res.json());
  }
  getTeacherList(){
    this.http.get(appconstants.API_URL + 'Teacher/' + appconstants.GlobalSchoolId)
    .map((data : Response) =>{
      return data.json() as Teacher[];
    }).toPromise().then(x => {
      this.teacherList = x;
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
  deleteTeacher(id: number) {
    return this.http.delete(appconstants.API_URL + 'Teacher/' + id).map(res => res.json());
  }
}

