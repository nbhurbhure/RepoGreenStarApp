import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {IndividualTracking} from'./individualTrackingmodel';
import {appconstants} from 'src/common/appconstants';

@Injectable()
export class IndividualTrackingService {

  selectedIndividualTracking : IndividualTracking;
  individualTrackingList : IndividualTracking[];

  constructor(private http : Http) { }

  postIndividualTracking(objIndividualTracking : IndividualTracking){
    var body = JSON.stringify(objIndividualTracking);
    var headerOptions = new Headers({'Access-Control-Allow-Origin': '*','Content-Type':'application/json'});
    var requestOptions = new RequestOptions({method : RequestMethod.Post,headers : headerOptions});
    return this.http.post(appconstants.API_URL + 'IndividualTracking/',body,requestOptions).map(x => x.json());
  }

  putIndividualTracking(id, objIndividualTracking) {
    var body = JSON.stringify(objIndividualTracking);
    var headerOptions = new Headers({'Access-Control-Allow-Origin': '*', 'Content-Type':'application/json'});
    var requestOptions = new RequestOptions({ method: RequestMethod.Put, headers: headerOptions });
    return this.http.put(appconstants.API_URL + 'IndividualTracking/' + id,
      body,
      requestOptions).map(res => res.json());
  }
  getIndividualTrackingList(){
    this.http.get(appconstants.API_URL + 'IndividualTracking')
    .map((data : Response) =>{
      return data.json() as IndividualTracking[];
    }).toPromise().then(x => {
      this.individualTrackingList = x;
    })
  }

  deleteIndividualTracking(id: number) {
    return this.http.delete(appconstants.API_URL + 'IndividualTracking/' + id).map(res => res.json());
  }
}

