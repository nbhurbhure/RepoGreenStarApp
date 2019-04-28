import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {HolidayType} from'./holidayTypemodel';
import {appconstants} from 'src/common/appconstants';

@Injectable()
export class HolidayTypeService {

  selectedHolidayType : HolidayType;
  holidayTypeList : HolidayType[];

  constructor(private http : Http) { }

  postHolidayType(objHolidayType : HolidayType){
    var body = JSON.stringify(objHolidayType);
    var headerOptions = new Headers({'Access-Control-Allow-Origin': '*','Content-Type':'application/json'});
    var requestOptions = new RequestOptions({method : RequestMethod.Post,headers : headerOptions});
    return this.http.post(appconstants.API_URL + 'HolidayType/',body,requestOptions).map(x => x.json());
  }

  putHolidayType(id, objHolidayType) {
    var body = JSON.stringify(objHolidayType);
    var headerOptions = new Headers({'Access-Control-Allow-Origin': '*', 'Content-Type':'application/json'});
    var requestOptions = new RequestOptions({ method: RequestMethod.Put, headers: headerOptions });
    return this.http.put(appconstants.API_URL + 'HolidayType/' + id,
      body,
      requestOptions).map(res => res.json());
  }
  getHolidayTypeList(){
    this.http.get(appconstants.API_URL + 'HolidayType')
    .map((data : Response) =>{
      return data.json() as HolidayType[];
    }).toPromise().then(x => {
      this.holidayTypeList = x;
    })
  }

  deleteHolidayType(id: number) {
    return this.http.delete(appconstants.API_URL + 'HolidayType/' + id).map(res => res.json());
  }
}

