import { TestBed } from '@angular/core/testing';
import { ClassWiseTrackingService } from './classWiseTracking.service';
//import { Http, ConnectionBackend } from '@angular/http';
import { Http, Response, Headers, RequestOptions, RequestMethod, ConnectionBackend, HttpModule } from '@angular/http';
import { inject } from '@angular/core';
import { ClassWiseTrackingComponent } from '../classWiseTracking/classWiseTracking.component';
import { domRendererFactory3 } from '@angular/core/src/render3/interfaces/renderer';
describe('ClassWiseTrackingService', () => {

  let service : ClassWiseTrackingService;
  let http;

  let options: RequestOptions;

  beforeEach(() => { 
    TestBed.configureTestingModule({ 
      providers: [ClassWiseTrackingService, ConnectionBackend],
      imports: [HttpModule ]
    })
   , service = new ClassWiseTrackingService(http); 
  }); 

  it('should be created', () => {
    const service1: ClassWiseTrackingService = TestBed.get(ClassWiseTrackingService);
    expect(service1).toBeTruthy();
  });

  it('#getClassWiseTrackingList should be called successfully', () => {
    const service1: ClassWiseTrackingService = TestBed.get(ClassWiseTrackingService);
    service1.getClassWiseTrackingList();     
    expect(service1.classWiseTrackingList).toBe(undefined);    
  }); 

});
