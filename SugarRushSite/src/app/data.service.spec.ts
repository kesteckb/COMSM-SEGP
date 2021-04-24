import { TestBed } from '@angular/core/testing';
import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

describe('DataService', () => {
   let service: DataService;

   beforeEach(() => {
      TestBed.configureTestingModule({
         imports:[
            HttpClientModule
         ],
         providers: [
            HttpClient
         ]
   });
      service = TestBed.inject(DataService);
   });

   it('should be created', () => {
      expect(service).toBeTruthy();
   });
});
