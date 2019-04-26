import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {Section} from'./section.model';
import {appconstants} from 'src/common/appconstants';
import {Standard} from 'src/Standards/shared/Standard.model'

@Injectable()
export class SectionService {

  selectedSection : Section;
  sectionList : Section[];
  objStandardList : Standard[];

  constructor(private http : Http) { }

  postSection(objSection : Section){
    var body = JSON.stringify(objSection);
    var headerOptions = new Headers({'Access-Control-Allow-Origin': '*','Content-Type':'application/json'});
    var requestOptions = new RequestOptions({method : RequestMethod.Post,headers : headerOptions});
    return this.http.post(appconstants.API_URL + 'Section/',body,requestOptions).map(x => x.json());
  }

  putSection(id, objSection) {
    var body = JSON.stringify(objSection);
    var headerOptions = new Headers({'Access-Control-Allow-Origin': '*', 'Content-Type':'application/json'});
    var requestOptions = new RequestOptions({ method: RequestMethod.Put, headers: headerOptions });
    return this.http.put(appconstants.API_URL + 'Section/' + id,
      body,
      requestOptions).map(res => res.json());
  }
  getSectionList(){
    this.http.get(appconstants.API_URL + 'Section/' + appconstants.GlobalSchoolId)
    .map((data : Response) =>{
      return data.json() as Section[];
    }).toPromise().then(x => {
      this.sectionList = x;
    })
  }

  getStandardList() {
    this.http.get(appconstants.API_URL + 'Standard')
    .map((data : Response) =>{
      return data.json() as Standard[];
    }).toPromise().then(x => {
      this.objStandardList = x;
    })
  }
  deleteSection(id: number) {
    return this.http.delete(appconstants.API_URL + 'Section/' + id).map(res => res.json());
  }
}

