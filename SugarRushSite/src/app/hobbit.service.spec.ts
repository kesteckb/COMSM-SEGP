import { TestBed } from '@angular/core/testing';
import { HobbitService } from './hobbit.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

describe('HobbitService', () => {
   let service: HobbitService;

   beforeEach(() => {
      TestBed.configureTestingModule({
         imports:[
            HttpClientModule
         ],
         providers: [
            HttpClient
         ]
      });
      service = TestBed.inject(HobbitService);
   });

   it('should be created', () => {
      expect(service).toBeTruthy();
   });
});
