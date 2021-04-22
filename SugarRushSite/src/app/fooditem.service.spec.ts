import { TestBed } from '@angular/core/testing';
import { FoodItemService } from './fooditem.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


describe('FoodItemService', () => {
   let service: FoodItemService;
   let httpClient: HttpClient;
   let httpTestingController: HttpTestingController;
   beforeEach(() => {
      TestBed.configureTestingModule({
         imports:[
            HttpClientTestingModule,
            RouterModule.forRoot([])
         ],
         providers: [
            HttpClient
         ]
   });
      service = TestBed.inject(FoodItemService);
      httpClient = TestBed.inject(HttpClient);
      httpTestingController = TestBed.inject(HttpTestingController);
   });

   it('should be created', () => {
      expect(service).toBeTruthy();
   });
});
