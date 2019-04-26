import { TestBed } from '@angular/core/testing';
import { CityService } from './city.service';
//import { Http, ConnectionBackend } from '@angular/http';
import { Http, Response, Headers, RequestOptions, RequestMethod, ConnectionBackend, HttpModule } from '@angular/http';
import { inject } from '@angular/core';
import { CityComponent } from '../city/city.component';
import { domRendererFactory3 } from '@angular/core/src/render3/interfaces/renderer';
describe('CityService', () => {

  let service : CityService;
  let http;

  let options: RequestOptions;

  beforeEach(() => { 
    TestBed.configureTestingModule({ 
      providers: [CityService, ConnectionBackend],
      imports: [HttpModule ]
    })
   , service = new CityService(http); 
  }); 

  it('should be created', () => {
    const service1: CityService = TestBed.get(CityService);
    expect(service1).toBeTruthy();
  });

  it('#getCityList should be called successfully', () => {
    const service1: CityService = TestBed.get(CityService);
    service1.getCityList();     
    expect(service1.cityList).toBe(undefined);    
  }); 

});
