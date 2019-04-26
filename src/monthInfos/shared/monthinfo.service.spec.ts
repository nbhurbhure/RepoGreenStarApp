import { TestBed } from '@angular/core/testing';
import { MonthInfoService } from './MonthInfo.service';
//import { Http, ConnectionBackend } from '@angular/http';
import { Http, Response, Headers, RequestOptions, RequestMethod, ConnectionBackend, HttpModule } from '@angular/http';
import { inject } from '@angular/core';
import { MonthInfoComponent } from '../MonthInfo/MonthInfo.component';
import { domRendererFactory3 } from '@angular/core/src/render3/interfaces/renderer';
describe('MonthInfoService', () => {

  let service : MonthInfoService;
  let http;

  let options: RequestOptions;

  beforeEach(() => { 
    TestBed.configureTestingModule({ 
      providers: [MonthInfoService, ConnectionBackend],
      imports: [HttpModule ]
    })
   , service = new MonthInfoService(http); 
  }); 

  it('should be created', () => {
    const service1: MonthInfoService = TestBed.get(MonthInfoService);
    expect(service1).toBeTruthy();
  });

  it('#getMonthInfoList should be called successfully', () => {
    const service1: MonthInfoService = TestBed.get(MonthInfoService);
    service1.getMonthInfoList();     
    expect(service1.monthInfoList).toBe(undefined);    
  }); 

});
