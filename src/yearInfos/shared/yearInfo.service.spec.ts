import { TestBed } from '@angular/core/testing';
import { YearInfoService } from './YearInfo.service';
//import { Http, ConnectionBackend } from '@angular/http';
import { Http, Response, Headers, RequestOptions, RequestMethod, ConnectionBackend, HttpModule } from '@angular/http';
import { inject } from '@angular/core';
import { YearInfoComponent } from '../YearInfo/YearInfo.component';
import { domRendererFactory3 } from '@angular/core/src/render3/interfaces/renderer';
describe('YearInfoService', () => {

  let service : YearInfoService;
  let http;

  let options: RequestOptions;

  beforeEach(() => { 
    TestBed.configureTestingModule({ 
      providers: [YearInfoService, ConnectionBackend],
      imports: [HttpModule ]
    })
   , service = new YearInfoService(http); 
  }); 

  it('should be created', () => {
    const service1: YearInfoService = TestBed.get(YearInfoService);
    expect(service1).toBeTruthy();
  });

  it('#getYearInfoList should be called successfully', () => {
    const service1: YearInfoService = TestBed.get(YearInfoService);
    service1.getYearInfoList();     
    expect(service1.yearInfoList).toBe(undefined);    
  }); 

});
