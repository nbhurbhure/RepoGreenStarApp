import { TestBed } from '@angular/core/testing';
import { DayInfoService } from './dayinfo.service';
//import { Http, ConnectionBackend } from '@angular/http';
import { Http, Response, Headers, RequestOptions, RequestMethod, ConnectionBackend, HttpModule } from '@angular/http';
import { inject } from '@angular/core';
import { DayInfoComponent } from '../dayInfo/dayInfo.component';
import { domRendererFactory3 } from '@angular/core/src/render3/interfaces/renderer';
describe('DayInfoService', () => {

  let service : DayInfoService;
  let http;

  let options: RequestOptions;

  beforeEach(() => { 
    TestBed.configureTestingModule({ 
      providers: [DayInfoService, ConnectionBackend],
      imports: [HttpModule ]
    })
   , service = new DayInfoService(http); 
  }); 

  it('should be created', () => {
    const service1: DayInfoService = TestBed.get(DayInfoService);
    expect(service1).toBeTruthy();
  });

  it('#getDayInfoList should be called successfully', () => {
    const service1: DayInfoService = TestBed.get(DayInfoService);
    service1.getDayInfoList();     
    expect(service1.dayInfoList).toBe(undefined);    
  }); 

});
