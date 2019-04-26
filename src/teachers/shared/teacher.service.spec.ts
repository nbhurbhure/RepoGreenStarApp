import { TestBed } from '@angular/core/testing';
import { TeacherService } from './Teacher.service';
//import { Http, ConnectionBackend } from '@angular/http';
import { Http, Response, Headers, RequestOptions, RequestMethod, ConnectionBackend, HttpModule } from '@angular/http';
import { inject } from '@angular/core';
import { TeacherComponent } from '../Teacher/Teacher.component';
import { domRendererFactory3 } from '@angular/core/src/render3/interfaces/renderer';
describe('TeacherService', () => {

  let service : TeacherService;
  let http;

  let options: RequestOptions;

  beforeEach(() => { 
    TestBed.configureTestingModule({ 
      providers: [TeacherService, ConnectionBackend],
      imports: [HttpModule ]
    })
   , service = new TeacherService(http); 
  }); 

  it('should be created', () => {
    const service1: TeacherService = TestBed.get(TeacherService);
    expect(service1).toBeTruthy();
  });

  it('#getTeacherList should be called successfully', () => {
    const service1: TeacherService = TestBed.get(TeacherService);
    service1.getTeacherList();     
    expect(service1.teacherList).toBe(undefined);    
  }); 

});
