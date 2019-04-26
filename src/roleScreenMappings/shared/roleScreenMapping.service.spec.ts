import { TestBed } from '@angular/core/testing';
import { RoleScreenMappingService } from './RoleScreenMapping.service';
//import { Http, ConnectionBackend } from '@angular/http';
import { Http, Response, Headers, RequestOptions, RequestMethod, ConnectionBackend, HttpModule } from '@angular/http';
import { inject } from '@angular/core';
import { RoleScreenMappingComponent } from '../RoleScreenMapping/RoleScreenMapping.component';
import { domRendererFactory3 } from '@angular/core/src/render3/interfaces/renderer';
describe('RoleScreenMappingService', () => {

  let service : RoleScreenMappingService;
  let http;

  let options: RequestOptions;

  beforeEach(() => { 
    TestBed.configureTestingModule({ 
      providers: [RoleScreenMappingService, ConnectionBackend],
      imports: [HttpModule ]
    })
   , service = new RoleScreenMappingService(http); 
  }); 

  it('should be created', () => {
    const service1: RoleScreenMappingService = TestBed.get(RoleScreenMappingService);
    expect(service1).toBeTruthy();
  });

  it('#getRoleScreenMappingList should be called successfully', () => {
    const service1: RoleScreenMappingService = TestBed.get(RoleScreenMappingService);
    service1.getRoleScreenMappingList();     
    expect(service1.roleScreenMappingList).toBe(undefined);    
  }); 

});
