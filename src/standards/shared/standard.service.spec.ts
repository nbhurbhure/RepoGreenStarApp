import { TestBed } from '@angular/core/testing';
import { StandardService } from './Standard.service';
//import { Http, ConnectionBackend } from '@angular/http';
import { Http, Response, Headers, RequestOptions, RequestMethod, ConnectionBackend, HttpModule } from '@angular/http';
import { inject } from '@angular/core';
import { StandardComponent } from '../Standard/Standard.component';
import { domRendererFactory3 } from '@angular/core/src/render3/interfaces/renderer';
describe('StandardService', () => {

  let service : StandardService;
  let http;

  let options: RequestOptions;

  beforeEach(() => { 
    TestBed.configureTestingModule({ 
      providers: [StandardService, ConnectionBackend],
      imports: [HttpModule ]
    })
   , service = new StandardService(http); 
  }); 

  it('should be created', () => {
    const service1: StandardService = TestBed.get(StandardService);
    expect(service1).toBeTruthy();
  });

  it('#getStandardList should be called successfully', () => {
    const service1: StandardService = TestBed.get(StandardService);
    service1.getStandardList();     
    expect(service1.standardList).toBe(undefined);    
  }); 

});
