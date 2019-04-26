import { TestBed } from '@angular/core/testing';
import { StudentDataService } from './StudentData.service';
//import { Http, ConnectionBackend } from '@angular/http';
import { Http, Response, Headers, RequestOptions, RequestMethod, ConnectionBackend, HttpModule } from '@angular/http';
import { inject } from '@angular/core';
import { StudentDataComponent } from '../StudentData/StudentData.component';
import { domRendererFactory3 } from '@angular/core/src/render3/interfaces/renderer';
describe('StudentDataService', () => {

  let service : StudentDataService;
  let http;

  let options: RequestOptions;

  beforeEach(() => { 
    TestBed.configureTestingModule({ 
      providers: [StudentDataService, ConnectionBackend],
      imports: [HttpModule ]
    })
   , service = new StudentDataService(http); 
  }); 

  it('should be created', () => {
    const service1: StudentDataService = TestBed.get(StudentDataService);
    expect(service1).toBeTruthy();
  });

  it('#getStudentDataList should be called successfully', () => {
    const service1: StudentDataService = TestBed.get(StudentDataService);
    service1.getStudentDataList();     
    expect(service1.studentDataList).toBe(undefined);    
  }); 

});
