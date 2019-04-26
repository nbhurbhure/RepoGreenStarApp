import { TestBed } from '@angular/core/testing';
import { HolidayTypeService } from './HolidayType.service';
//import { Http, ConnectionBackend } from '@angular/http';
import { Http, Response, Headers, RequestOptions, RequestMethod, ConnectionBackend, HttpModule } from '@angular/http';
import { inject } from '@angular/core';
import { HolidayTypeComponent } from '../HolidayType/HolidayType.component';
import { domRendererFactory3 } from '@angular/core/src/render3/interfaces/renderer';
describe('HolidayTypeService', () => {

  let service : HolidayTypeService;
  let http;

  let options: RequestOptions;

  beforeEach(() => { 
    TestBed.configureTestingModule({ 
      providers: [HolidayTypeService, ConnectionBackend],
      imports: [HttpModule ]
    })
   , service = new HolidayTypeService(http); 
  }); 

  it('should be created', () => {
    const service1: HolidayTypeService = TestBed.get(HolidayTypeService);
    expect(service1).toBeTruthy();
  });

  it('#getHolidayTypeList should be called successfully', () => {
    const service1: HolidayTypeService = TestBed.get(HolidayTypeService);
    service1.getHolidayTypeList();     
    expect(service1.holidayTypeList).toBe(undefined);    
  }); 

});
