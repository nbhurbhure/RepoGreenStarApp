import { TestBed } from '@angular/core/testing';
import { OutreachService } from './Outreach.service';
//import { Http, ConnectionBackend } from '@angular/http';
import { Http, Response, Headers, RequestOptions, RequestMethod, ConnectionBackend, HttpModule } from '@angular/http';
import { inject } from '@angular/core';
import { OutreachComponent } from '../Outreach/Outreach.component';
import { domRendererFactory3 } from '@angular/core/src/render3/interfaces/renderer';
describe('OutreachService', () => {

  let service : OutreachService;
  let http;

  let options: RequestOptions;

  beforeEach(() => { 
    TestBed.configureTestingModule({ 
      providers: [OutreachService, ConnectionBackend],
      imports: [HttpModule ]
    })
   , service = new OutreachService(http); 
  }); 

  it('should be created', () => {
    const service1: OutreachService = TestBed.get(OutreachService);
    expect(service1).toBeTruthy();
  });

  it('#getOutreachList should be called successfully', () => {
    const service1: OutreachService = TestBed.get(OutreachService);
    service1.getOutreachList();     
    expect(service1.outreachList).toBe(undefined);    
  }); 

});
