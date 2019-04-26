import { TestBed } from '@angular/core/testing';
import { HolidayService } from './Holiday.service';
//import { Http, ConnectionBackend } from '@angular/http';
import { Http, Response, Headers, RequestOptions, RequestMethod, ConnectionBackend, HttpModule } from '@angular/http';
import { inject } from '@angular/core';
import { HolidayComponent } from '../Holiday/Holiday.component';
import { domRendererFactory3 } from '@angular/core/src/render3/interfaces/renderer';
describe('HolidayService', () => {

  let service : HolidayService;
  let http;

  let options: RequestOptions;

  beforeEach(() => { 
    TestBed.configureTestingModule({ 
      providers: [HolidayService, ConnectionBackend],
      imports: [HttpModule ]
    })
   , service = new HolidayService(http); 
  }); 

  it('should be created', () => {
    const service1: HolidayService = TestBed.get(HolidayService);
    expect(service1).toBeTruthy();
  });

  it('#getHolidayList should be called successfully', () => {
    const service1: HolidayService = TestBed.get(HolidayService);
    service1.getHolidayList();     
    expect(service1.holidayList).toBe(undefined);    
  }); 

});
