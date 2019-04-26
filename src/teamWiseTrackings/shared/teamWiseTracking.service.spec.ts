import { TestBed } from '@angular/core/testing';
import { TeamWiseTrackingService } from './TeamWiseTracking.service';
//import { Http, ConnectionBackend } from '@angular/http';
import { Http, Response, Headers, RequestOptions, RequestMethod, ConnectionBackend, HttpModule } from '@angular/http';
import { inject } from '@angular/core';
import { TeamWiseTrackingComponent } from '../TeamWiseTracking/TeamWiseTracking.component';
import { domRendererFactory3 } from '@angular/core/src/render3/interfaces/renderer';
describe('TeamWiseTrackingService', () => {

  let service : TeamWiseTrackingService;
  let http;

  let options: RequestOptions;

  beforeEach(() => { 
    TestBed.configureTestingModule({ 
      providers: [TeamWiseTrackingService, ConnectionBackend],
      imports: [HttpModule ]
    })
   , service = new TeamWiseTrackingService(http); 
  }); 

  it('should be created', () => {
    const service1: TeamWiseTrackingService = TestBed.get(TeamWiseTrackingService);
    expect(service1).toBeTruthy();
  });

  it('#getTeamWiseTrackingList should be called successfully', () => {
    const service1: TeamWiseTrackingService = TestBed.get(TeamWiseTrackingService);
    service1.getTeamWiseTrackingList();     
    expect(service1.teamWiseTrackingList).toBe(undefined);    
  }); 

});
