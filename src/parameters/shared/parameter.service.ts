import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {Parameter} from'./parametermodel';
import {appconstants} from 'src/common/appconstants';
import {School} from 'src/schools/shared/schoolmodel';

@Injectable()
export class ParameterService {

  selectedParameter : Parameter;
  parameterList : Parameter[];
  objSchoolList : School[];

  constructor(private http : Http) { }

  postParameter(objParameter : Parameter){
    var body = JSON.stringify(objParameter);
    var headerOptions = new Headers({'Access-Control-Allow-Origin': '*','Content-Type':'application/json'});
    var requestOptions = new RequestOptions({method : RequestMethod.Post,headers : headerOptions});
    return this.http.post(appconstants.API_URL + 'Parameter/',body,requestOptions).map(x => x.json());
  }

  putParameter(id, objParameter) {
    var body = JSON.stringify(objParameter);
    var headerOptions = new Headers({'Access-Control-Allow-Origin': '*', 'Content-Type':'application/json'});
    var requestOptions = new RequestOptions({ method: RequestMethod.Put, headers: headerOptions });
    return this.http.put(appconstants.API_URL + 'Parameter/' + id,
      body,
      requestOptions).map(res => res.json());
  }
  getParameterList(){
    this.http.get(appconstants.API_URL + 'Parameter/' + appconstants.GlobalSchoolId)
    .map((data : Response) =>{
      return data.json() as Parameter[];
    }).toPromise().then(x => {
      this.parameterList = x;
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
  deleteParameter(id: number) {
    return this.http.delete(appconstants.API_URL + 'Parameter/' + id).map(res => res.json());
  }
}

