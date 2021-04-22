import { TestBed } from '@angular/core/testing';
import { HouseService } from './house.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

describe('HouseService', () => {
   let service: HouseService;

   beforeEach(() => {
      TestBed.configureTestingModule({
         imports:[
            HttpClientModule,
            RouterModule.forRoot([])
         ],
         providers: [
            HttpClient
         ]
      });
      service = TestBed.inject(HouseService);
   });

   it('should be created', () => {
      expect(service).toBeTruthy();
   });
});
