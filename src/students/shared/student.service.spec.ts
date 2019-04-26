import { TestBed } from '@angular/core/testing';
import { StudentService } from './Student.service';
//import { Http, ConnectionBackend } from '@angular/http';
import { Http, Response, Headers, RequestOptions, RequestMethod, ConnectionBackend, HttpModule } from '@angular/http';
import { inject } from '@angular/core';
import { StudentComponent } from '../Student/Student.component';
import { domRendererFactory3 } from '@angular/core/src/render3/interfaces/renderer';
describe('StudentService', () => {

  let service : StudentService;
  let http;

  let options: RequestOptions;

  beforeEach(() => { 
    TestBed.configureTestingModule({ 
      providers: [StudentService, ConnectionBackend],
      imports: [HttpModule ]
    })
   , service = new StudentService(http); 
  }); 

  it('should be created', () => {
    const service1: StudentService = TestBed.get(StudentService);
    expect(service1).toBeTruthy();
  });

  it('#getStudentList should be called successfully', () => {
    const service1: StudentService = TestBed.get(StudentService);
    service1.getStudentList();     
    expect(service1.studentList).toBe(undefined);    
  }); 

});
