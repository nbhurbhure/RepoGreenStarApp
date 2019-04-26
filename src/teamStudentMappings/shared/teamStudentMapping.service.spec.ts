import { TestBed } from '@angular/core/testing';
import { TeamStudentMappingService } from './TeamStudentMapping.service';
//import { Http, ConnectionBackend } from '@angular/http';
import { Http, Response, Headers, RequestOptions, RequestMethod, ConnectionBackend, HttpModule } from '@angular/http';
import { inject } from '@angular/core';
import { TeamStudentMappingComponent } from '../TeamStudentMapping/TeamStudentMapping.component';
import { domRendererFactory3 } from '@angular/core/src/render3/interfaces/renderer';
describe('TeamStudentMappingService', () => {

  let service : TeamStudentMappingService;
  let http;

  let options: RequestOptions;

  beforeEach(() => { 
    TestBed.configureTestingModule({ 
      providers: [TeamStudentMappingService, ConnectionBackend],
      imports: [HttpModule ]
    })
   , service = new TeamStudentMappingService(http); 
  }); 

  it('should be created', () => {
    const service1: TeamStudentMappingService = TestBed.get(TeamStudentMappingService);
    expect(service1).toBeTruthy();
  });

  it('#getTeamStudentMappingList should be called successfully', () => {
    const service1: TeamStudentMappingService = TestBed.get(TeamStudentMappingService);
    service1.getTeamStudentMappingList();     
    expect(service1.teamStudentMappingList).toBe(undefined);    
  }); 

});
