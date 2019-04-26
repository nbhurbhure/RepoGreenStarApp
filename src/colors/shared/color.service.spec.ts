import { TestBed } from '@angular/core/testing';
import { ColorService } from './color.service';
//import { Http, ConnectionBackend } from '@angular/http';
import { Http, Response, Headers, RequestOptions, RequestMethod, ConnectionBackend, HttpModule } from '@angular/http';
import { inject } from '@angular/core';
import { ColorComponent } from '../color/color.component';
import { domRendererFactory3 } from '@angular/core/src/render3/interfaces/renderer';
describe('ColorService', () => {

  let service : ColorService;
  let http;

  let options: RequestOptions;

  beforeEach(() => { 
    TestBed.configureTestingModule({ 
      providers: [ColorService, ConnectionBackend],
      imports: [HttpModule ]
    })
   , service = new ColorService(http); 
  }); 

  it('should be created', () => {
    const service1: ColorService = TestBed.get(ColorService);
    expect(service1).toBeTruthy();
  });

  it('#getColorList should be called successfully', () => {
    const service1: ColorService = TestBed.get(ColorService);
    service1.getColorList();     
    expect(service1.colorList).toBe(undefined);    
  }); 

});
