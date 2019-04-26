import { TestBed } from '@angular/core/testing';
import { ParameterService } from './Parameter.service';
//import { Http, ConnectionBackend } from '@angular/http';
import { Http, Response, Headers, RequestOptions, RequestMethod, ConnectionBackend, HttpModule } from '@angular/http';
import { inject } from '@angular/core';
import { ParameterComponent } from '../Parameter/Parameter.component';
import { domRendererFactory3 } from '@angular/core/src/render3/interfaces/renderer';
describe('ParameterService', () => {

  let service : ParameterService;
  let http;

  let options: RequestOptions;

  beforeEach(() => { 
    TestBed.configureTestingModule({ 
      providers: [ParameterService, ConnectionBackend],
      imports: [HttpModule ]
    })
   , service = new ParameterService(http); 
  }); 

  it('should be created', () => {
    const service1: ParameterService = TestBed.get(ParameterService);
    expect(service1).toBeTruthy();
  });

  it('#getParameterList should be called successfully', () => {
    const service1: ParameterService = TestBed.get(ParameterService);
    service1.getParameterList();     
    expect(service1.parameterList).toBe(undefined);    
  }); 

});
