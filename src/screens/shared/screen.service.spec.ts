import { TestBed } from '@angular/core/testing';
import { ScreenService } from './Screen.service';
//import { Http, ConnectionBackend } from '@angular/http';
import { Http, Response, Headers, RequestOptions, RequestMethod, ConnectionBackend, HttpModule } from '@angular/http';
import { inject } from '@angular/core';
import { ScreenComponent } from '../Screen/Screen.component';
import { domRendererFactory3 } from '@angular/core/src/render3/interfaces/renderer';
describe('ScreenService', () => {

  let service : ScreenService;
  let http;

  let options: RequestOptions;

  beforeEach(() => { 
    TestBed.configureTestingModule({ 
      providers: [ScreenService, ConnectionBackend],
      imports: [HttpModule ]
    })
   , service = new ScreenService(http); 
  }); 

  it('should be created', () => {
    const service1: ScreenService = TestBed.get(ScreenService);
    expect(service1).toBeTruthy();
  });

  it('#getScreenList should be called successfully', () => {
    const service1: ScreenService = TestBed.get(ScreenService);
    service1.getScreenList();     
    expect(service1.screenList).toBe(undefined);    
  }); 

});
