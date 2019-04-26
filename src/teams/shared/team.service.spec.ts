import { TestBed } from '@angular/core/testing';
import { TeamService } from './Team.service';
//import { Http, ConnectionBackend } from '@angular/http';
import { Http, Response, Headers, RequestOptions, RequestMethod, ConnectionBackend, HttpModule } from '@angular/http';
import { inject } from '@angular/core';
import { TeamComponent } from '../Team/Team.component';
import { domRendererFactory3 } from '@angular/core/src/render3/interfaces/renderer';
describe('TeamService', () => {

  let service : TeamService;
  let http;

  let options: RequestOptions;

  beforeEach(() => { 
    TestBed.configureTestingModule({ 
      providers: [TeamService, ConnectionBackend],
      imports: [HttpModule ]
    })
   , service = new TeamService(http); 
  }); 

  it('should be created', () => {
    const service1: TeamService = TestBed.get(TeamService);
    expect(service1).toBeTruthy();
  });

  it('#getTeamList should be called successfully', () => {
    const service1: TeamService = TestBed.get(TeamService);
    service1.getTeamList();     
    expect(service1.teamList).toBe(undefined);    
  }); 

});
