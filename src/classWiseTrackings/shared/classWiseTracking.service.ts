import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {ClassWiseTracking} from'./classWiseTrackingmodel';
import {appconstants} from 'src/common/appconstants';

@Injectable()
export class ClassWiseTrackingService {

  selectedClassWiseTracking : ClassWiseTracking;
  classWiseTrackingList : ClassWiseTracking[];

  constructor(private http : Http) { }

  postClassWiseTracking(objClassWiseTracking : ClassWiseTracking){
    var body = JSON.stringify(objClassWiseTracking);
    var headerOptions = new Headers({'Access-Control-Allow-Origin': '*','Content-Type':'application/json'});
    var requestOptions = new RequestOptions({method : RequestMethod.Post,headers : headerOptions});
    return this.http.post(appconstants.API_URL + 'ClassWiseTracking/',body,requestOptions).map(x => x.json());
  }

  putClassWiseTracking(id, objClassWiseTracking) {
    var body = JSON.stringify(objClassWiseTracking);
    var headerOptions = new Headers({'Access-Control-Allow-Origin': '*', 'Content-Type':'application/json'});
    var requestOptions = new RequestOptions({ method: RequestMethod.Put, headers: headerOptions });
    return this.http.put(appconstants.API_URL + 'ClassWiseTracking/' + id,
      body,
      requestOptions).map(res => res.json());
  }
  getClassWiseTrackingList(){
    this.http.get(appconstants.API_URL + 'ClassWiseTracking')
    .map((data : Response) =>{
      return data.json() as ClassWiseTracking[];
    }).toPromise().then(x => {
      this.classWiseTrackingList = x;
    })
  }

  deleteClassWiseTracking(id: number) {
    return this.http.delete(appconstants.API_URL + 'ClassWiseTracking/' + id).map(res => res.json());
  }
}

