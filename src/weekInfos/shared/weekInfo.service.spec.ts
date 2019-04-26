import { TestBed } from '@angular/core/testing';
import { WeekInfoService } from './WeekInfo.service';
//import { Http, ConnectionBackend } from '@angular/http';
import { Http, Response, Headers, RequestOptions, RequestMethod, ConnectionBackend, HttpModule } from '@angular/http';
import { inject } from '@angular/core';
import { WeekInfoComponent } from '../WeekInfo/WeekInfo.component';
import { domRendererFactory3 } from '@angular/core/src/render3/interfaces/renderer';
describe('WeekInfoService', () => {

  let service : WeekInfoService;
  let http;

  let options: RequestOptions;

  beforeEach(() => { 
    TestBed.configureTestingModule({ 
      providers: [WeekInfoService, ConnectionBackend],
      imports: [HttpModule ]
    })
   , service = new WeekInfoService(http); 
  }); 

  it('should be created', () => {
    const service1: WeekInfoService = TestBed.get(WeekInfoService);
    expect(service1).toBeTruthy();
  });

  it('#getWeekInfoList should be called successfully', () => {
    const service1: WeekInfoService = TestBed.get(WeekInfoService);
    service1.getWeekInfoList();     
    expect(service1.weekInfoList).toBe(undefined);    
  }); 

});
