import { TestBed } from '@angular/core/testing';
import { HobbitService } from './hobbit.service';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';

describe('HobbitService', () => {
   let httpClientSpy: {get: jasmine.Spy};
   let service: HobbitService;

   beforeEach(() => {
      httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
      service = new HobbitService(httpClientSpy as any);
   });

   it('should be created', () => {
      expect(service).toBeTruthy();
   });
});
