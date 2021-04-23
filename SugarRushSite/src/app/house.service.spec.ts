import { TestBed } from '@angular/core/testing';
import { HouseService } from './house.service';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';

describe('HouseService', () => {
   let httpClientSpy: {get: jasmine.Spy};
   let service: HouseService;

   beforeEach(() => {
      httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
      service = new HouseService(httpClientSpy as any);
   });

   it('should be created', () => {
      expect(service).toBeTruthy();
   });
});
