import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {Color} from'./color.model';
import {appconstants} from 'src/common/appconstants';

@Injectable()
export class ColorService {

  selectedColor : Color;
  colorList : Color[];

  constructor(private http : Http) { }

  postColor(objColor : Color){
    var body = JSON.stringify(objColor);
    var headerOptions = new Headers({'Access-Control-Allow-Origin': '*','Content-Type':'application/json'});
    var requestOptions = new RequestOptions({method : RequestMethod.Post,headers : headerOptions});
    return this.http.post(appconstants.API_URL + 'Color/',body,requestOptions).map(x => x.json());
  }

  putColor(id, objColor) {
    var body = JSON.stringify(objColor);
    var headerOptions = new Headers({'Access-Control-Allow-Origin': '*', 'Content-Type':'application/json'});
    var requestOptions = new RequestOptions({ method: RequestMethod.Put, headers: headerOptions });
    return this.http.put(appconstants.API_URL + 'Color/' + id,
      body,
      requestOptions).map(res => res.json());
  }
  getColorList(){
    this.http.get(appconstants.API_URL + 'Color')
    .map((data : Response) =>{
      return data.json() as Color[];
    }).toPromise().then(x => {
      this.colorList = x;
    })
  }

  deleteColor(id: number) {
    return this.http.delete(appconstants.API_URL + 'Color/' + id).map(res => res.json());
  }
}

