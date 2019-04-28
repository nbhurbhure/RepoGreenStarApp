import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {Outreach} from'./outreachmodel';
import {appconstants} from 'src/common/appconstants';

@Injectable()
export class OutreachService {

  selectedOutreach : Outreach;
  outreachList : Outreach[];

  constructor(private http : Http) { }

  postOutreach(objOutreach : Outreach){
    objOutreach.Id=0;
    console.log(objOutreach.Id);
    var body = JSON.stringify(objOutreach);
    var headerOptions = new Headers({'Access-Control-Allow-Origin': '*','Content-Type':'application/json'});
    var requestOptions = new RequestOptions({method : RequestMethod.Post,headers : headerOptions});
    return this.http.post(appconstants.API_URL + 'Outreach/',body,requestOptions).map(x => x.json());
  }

  putOutreach(id, objOutreach) {
    var body = JSON.stringify(objOutreach);
    var headerOptions = new Headers({'Access-Control-Allow-Origin': '*', 'Content-Type':'application/json'});
    var requestOptions = new RequestOptions({ method: RequestMethod.Put, headers: headerOptions });
    return this.http.put(appconstants.API_URL + 'Outreach/' + id,
      body,
      requestOptions).map(res => res.json());
  }
  getOutreachList(){
    this.http.get(appconstants.API_URL + 'Outreach')
    .map((data : Response) =>{
      return data.json() as Outreach[];
    }).toPromise().then(x => {
      this.outreachList = x;
    })
  }

  deleteOutreach(id: number) {
    return this.http.delete(appconstants.API_URL + 'Outreach/' + id).map(res => res.json());
  }
}

