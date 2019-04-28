import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {Vrole} from'./vrolemodel';
import {appconstants} from 'src/common/appconstants';

@Injectable()
export class VroleService {

  selectedVrole : Vrole;
  vroleList : Vrole[];

  constructor(private http : Http) { }

  postVrole(objVrole : Vrole){
    var body = JSON.stringify(objVrole);
    var headerOptions = new Headers({'Access-Control-Allow-Origin': '*','Content-Type':'application/json'});
    var requestOptions = new RequestOptions({method : RequestMethod.Post,headers : headerOptions});
    return this.http.post(appconstants.API_URL + 'Vrole/',body,requestOptions).map(x => x.json());
  }

  putVrole(id, objVrole) {
    var body = JSON.stringify(objVrole);
    var headerOptions = new Headers({'Access-Control-Allow-Origin': '*', 'Content-Type':'application/json'});
    var requestOptions = new RequestOptions({ method: RequestMethod.Put, headers: headerOptions });
    return this.http.put(appconstants.API_URL + 'Vrole/' + id,
      body,
      requestOptions).map(res => res.json());
  }
  getVroleList(){
    this.http.get(appconstants.API_URL + 'Vrole')
    .map((data : Response) =>{
      return data.json() as Vrole[];
    }).toPromise().then(x => {
      this.vroleList = x;
    })
  }

  deleteVrole(id: number) {
    return this.http.delete(appconstants.API_URL + 'Vrole/' + id).map(res => res.json());
  }
}

