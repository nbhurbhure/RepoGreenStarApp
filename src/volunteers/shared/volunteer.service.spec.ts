import { TestBed } from '@angular/core/testing';
import { VolunteerService } from './Volunteer.service';
//import { Http, ConnectionBackend } from '@angular/http';
import { Http, Response, Headers, RequestOptions, RequestMethod, ConnectionBackend, HttpModule } from '@angular/http';
import { inject } from '@angular/core';
import { VolunteerComponent } from '../Volunteer/Volunteer.component';
import { domRendererFactory3 } from '@angular/core/src/render3/interfaces/renderer';
describe('VolunteerService', () => {

  let service : VolunteerService;
  let http;

  let options: RequestOptions;

  beforeEach(() => { 
    TestBed.configureTestingModule({ 
      providers: [VolunteerService, ConnectionBackend],
      imports: [HttpModule ]
    })
   , service = new VolunteerService(http); 
  }); 

  it('should be created', () => {
    const service1: VolunteerService = TestBed.get(VolunteerService);
    expect(service1).toBeTruthy();
  });

  it('#getVolunteerList should be called successfully', () => {
    const service1: VolunteerService = TestBed.get(VolunteerService);
    service1.getVolunteerList();     
    expect(service1.volunteerList).toBe(undefined);    
  }); 

});
