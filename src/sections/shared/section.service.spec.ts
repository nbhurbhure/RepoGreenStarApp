import { TestBed } from '@angular/core/testing';
import { SectionService } from './Section.service';
//import { Http, ConnectionBackend } from '@angular/http';
import { Http, Response, Headers, RequestOptions, RequestMethod, ConnectionBackend, HttpModule } from '@angular/http';
import { inject } from '@angular/core';
import { SectionComponent } from '../Section/Section.component';
import { domRendererFactory3 } from '@angular/core/src/render3/interfaces/renderer';
describe('SectionService', () => {

  let service : SectionService;
  let http;

  let options: RequestOptions;

  beforeEach(() => { 
    TestBed.configureTestingModule({ 
      providers: [SectionService, ConnectionBackend],
      imports: [HttpModule ]
    })
   , service = new SectionService(http); 
  }); 

  it('should be created', () => {
    const service1: SectionService = TestBed.get(SectionService);
    expect(service1).toBeTruthy();
  });

  it('#getSectionList should be called successfully', () => {
    const service1: SectionService = TestBed.get(SectionService);
    service1.getSectionList();     
    expect(service1.sectionList).toBe(undefined);    
  }); 

});
