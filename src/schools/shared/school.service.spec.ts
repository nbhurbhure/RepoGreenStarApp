import { TestBed } from '@angular/core/testing';
import { SchoolService } from './School.service';
//import { Http, ConnectionBackend } from '@angular/http';
import { Http, Response, Headers, RequestOptions, RequestMethod, ConnectionBackend, HttpModule } from '@angular/http';
import { inject } from '@angular/core';
import { SchoolComponent } from '../School/School.component';
import { domRendererFactory3 } from '@angular/core/src/render3/interfaces/renderer';
describe('SchoolService', () => {

  let service : SchoolService;
  let http;

  let options: RequestOptions;

  beforeEach(() => { 
    TestBed.configureTestingModule({ 
      providers: [SchoolService, ConnectionBackend],
      imports: [HttpModule ]
    })
   , service = new SchoolService(http); 
  }); 

  it('should be created', () => {
    const service1: SchoolService = TestBed.get(SchoolService);
    expect(service1).toBeTruthy();
  });

  it('#getSchoolList should be called successfully', () => {
    const service1: SchoolService = TestBed.get(SchoolService);
    service1.getSchoolList();     
    expect(service1.schoolList).toBe(undefined);    
  }); 

});
