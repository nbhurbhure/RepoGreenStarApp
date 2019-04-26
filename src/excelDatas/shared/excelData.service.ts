import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {ExcelData} from'./excelData.model';
import {appconstants} from 'src/common/appconstants';

@Injectable()
export class ExcelDataService {

  selectedExcelData : ExcelData;
  excelDataList : ExcelData[];

  constructor(private http : Http) { }

  postExcelData(objExcelData : ExcelData){
    var body = JSON.stringify(objExcelData);
    var headerOptions = new Headers({'Access-Control-Allow-Origin': '*','Content-Type':'application/json'});
    var requestOptions = new RequestOptions({method : RequestMethod.Post,headers : headerOptions});
    return this.http.post(appconstants.API_URL + 'ExcelData/',body,requestOptions).map(x => x.json());
  }

  putExcelData(id, objExcelData) {
    var body = JSON.stringify(objExcelData);
    var headerOptions = new Headers({'Access-Control-Allow-Origin': '*', 'Content-Type':'application/json'});
    var requestOptions = new RequestOptions({ method: RequestMethod.Put, headers: headerOptions });
    return this.http.put(appconstants.API_URL + 'ExcelData/' + id,
      body,
      requestOptions).map(res => res.json());
  }
  getExcelDataList(){
    this.http.get(appconstants.API_URL + 'ExcelData')
    .map((data : Response) =>{
      return data.json() as ExcelData[];
    }).toPromise().then(x => {
      this.excelDataList = x;
    })
  }

  deleteExcelData(id: number) {
    return this.http.delete(appconstants.API_URL + 'ExcelData/' + id).map(res => res.json());
  }
}

