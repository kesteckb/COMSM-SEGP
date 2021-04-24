import { TestBed } from '@angular/core/testing';
import { FoodItemService } from './fooditem.service';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';

describe('FoodItemService', () => {
   let httpClientSpy: {get: jasmine.Spy };
   let service: FoodItemService;
   
   beforeEach(() => {
      httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
      service = new FoodItemService(httpClientSpy as any);
   })

   it('should be created', () => {
      expect(service).toBeTruthy();
   });
});
