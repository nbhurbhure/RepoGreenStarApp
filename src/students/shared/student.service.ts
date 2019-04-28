import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {Student} from'./studentmodel';
import {appconstants} from 'src/common/appconstants';
import {Section} from 'src/sections/shared/sectionmodel';

@Injectable()
export class StudentService {

  selectedStudent : Student;
  studentList : Student[];
  objSectionList : Section[];

  constructor(private http : Http) { }

  postStudent(objStudent : Student){
    var body = JSON.stringify(objStudent);
    var headerOptions = new Headers({'Access-Control-Allow-Origin': '*','Content-Type':'application/json'});
    var requestOptions = new RequestOptions({method : RequestMethod.Post,headers : headerOptions});
    return this.http.post(appconstants.API_URL + 'Student/',body,requestOptions).map(x => x.json());
  }

  putStudent(id, objStudent) {
    var body = JSON.stringify(objStudent);
    var headerOptions = new Headers({'Access-Control-Allow-Origin': '*', 'Content-Type':'application/json'});
    var requestOptions = new RequestOptions({ method: RequestMethod.Put, headers: headerOptions });
    return this.http.put(appconstants.API_URL + 'Student/' + id,
      body,
      requestOptions).map(res => res.json());
  }
  getStudentList(){
    this.http.get(appconstants.API_URL + 'Student/' + appconstants.GlobalSchoolId)
    .map((data : Response) =>{
      return data.json() as Student[];
    }).toPromise().then(x => {
      this.studentList = x;
    })
  }

  getSectionList() {
    this.http.get(appconstants.API_URL + 'Section')
    .map((data : Response) =>{
      return data.json() as Section[];
    }).toPromise().then(x => {
      this.objSectionList = x;
    })
  }
  deleteStudent(id: number) {
    return this.http.delete(appconstants.API_URL + 'Student/' + id).map(res => res.json());
  }
}

