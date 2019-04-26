import { TestBed } from '@angular/core/testing';
import { VroleService } from './Vrole.service';
//import { Http, ConnectionBackend } from '@angular/http';
import { Http, Response, Headers, RequestOptions, RequestMethod, ConnectionBackend, HttpModule } from '@angular/http';
import { inject } from '@angular/core';
import { VroleComponent } from '../Vrole/Vrole.component';
import { domRendererFactory3 } from '@angular/core/src/render3/interfaces/renderer';
describe('VroleService', () => {

  let service : VroleService;
  let http;

  let options: RequestOptions;

  beforeEach(() => { 
    TestBed.configureTestingModule({ 
      providers: [VroleService, ConnectionBackend],
      imports: [HttpModule ]
    })
   , service = new VroleService(http); 
  }); 

  it('should be created', () => {
    const service1: VroleService = TestBed.get(VroleService);
    expect(service1).toBeTruthy();
  });

  it('#getVroleList should be called successfully', () => {
    const service1: VroleService = TestBed.get(VroleService);
    service1.getVroleList();     
    expect(service1.vroleList).toBe(undefined);    
  }); 

});
