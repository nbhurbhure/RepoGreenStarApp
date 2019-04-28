import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {ComparativeChart} from'./comparativeChartmodel';
import {appconstants} from 'src/common/appconstants';

@Injectable()
export class ComparativeChartService {

  selectedComparativeChart : ComparativeChart;
  comparativeChartList : ComparativeChart[];

  constructor(private http : Http) { }

  postComparativeChart(objComparativeChart : ComparativeChart){
    var body = JSON.stringify(objComparativeChart);
    var headerOptions = new Headers({'Access-Control-Allow-Origin': '*','Content-Type':'application/json'});
    var requestOptions = new RequestOptions({method : RequestMethod.Post,headers : headerOptions});
    return this.http.post(appconstants.API_URL + 'ComparativeChart/',body,requestOptions).map(x => x.json());
  }

  putComparativeChart(id, objComparativeChart) {
    var body = JSON.stringify(objComparativeChart);
    var headerOptions = new Headers({'Access-Control-Allow-Origin': '*', 'Content-Type':'application/json'});
    var requestOptions = new RequestOptions({ method: RequestMethod.Put, headers: headerOptions });
    return this.http.put(appconstants.API_URL + 'ComparativeChart/' + id,
      body,
      requestOptions).map(res => res.json());
  }
  getComparativeChartList(){
    this.http.get(appconstants.API_URL + 'ComparativeChart')
    .map((data : Response) =>{
      return data.json() as ComparativeChart[];
    }).toPromise().then(x => {
      this.comparativeChartList = x;
    })
  }

  deleteComparativeChart(id: number) {
    return this.http.delete(appconstants.API_URL + 'ComparativeChart/' + id).map(res => res.json());
  }
}

