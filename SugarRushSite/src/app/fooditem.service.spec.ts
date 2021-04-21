import { TestBed } from '@angular/core/testing';
import { FoodItemService } from './fooditem.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

describe('FoodItemService', () => {
   let service: FoodItemService;

   beforeEach(() => {
      TestBed.configureTestingModule({
         imports:[
            HttpClientModule
         ],
         providers: [
            HttpClient
         ]
   });
      service = TestBed.inject(FoodItemService);
   });

   it('should be created', () => {
      expect(service).toBeTruthy();
   });
});
