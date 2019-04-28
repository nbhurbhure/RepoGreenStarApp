import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {Screen} from'./screenmodel';
import {appconstants} from 'src/common/appconstants';

@Injectable()
export class ScreenService {

  selectedScreen : Screen;
  screenList : Screen[];

  constructor(private http : Http) { }

  postScreen(objScreen : Screen){
    var body = JSON.stringify(objScreen);
    var headerOptions = new Headers({'Access-Control-Allow-Origin': '*','Content-Type':'application/json'});
    var requestOptions = new RequestOptions({method : RequestMethod.Post,headers : headerOptions});
    return this.http.post(appconstants.API_URL + 'Screen/',body,requestOptions).map(x => x.json());
  }

  putScreen(id, objScreen) {
    var body = JSON.stringify(objScreen);
    var headerOptions = new Headers({'Access-Control-Allow-Origin': '*', 'Content-Type':'application/json'});
    var requestOptions = new RequestOptions({ method: RequestMethod.Put, headers: headerOptions });
    return this.http.put(appconstants.API_URL + 'Screen/' + id,
      body,
      requestOptions).map(res => res.json());
  }
  getScreenList(){
    this.http.get(appconstants.API_URL + 'Screen')
    .map((data : Response) =>{
      return data.json() as Screen[];
    }).toPromise().then(x => {
      this.screenList = x;
    })
  }

  deleteScreen(id: number) {
    return this.http.delete(appconstants.API_URL + 'Screen/' + id).map(res => res.json());
  }
}

