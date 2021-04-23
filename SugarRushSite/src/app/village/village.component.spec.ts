import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterModule } from '@angular/router';
import { VillageComponent } from './village.component';
import { HouseService } from '../house.service';
import { TestHouseService } from '../testing/test-house.service';

describe('VillageComponent', () => {
   let component: VillageComponent;
   let houseService: HouseService;

   beforeEach(() => {
      TestBed.configureTestingModule({
         imports: [
            HttpClientTestingModule,
            RouterModule.forRoot([])
         ],
         providers: [
            VillageComponent,
            {provided: HouseService, useClass: TestHouseService}
         ]
      })
      component = TestBed.inject(VillageComponent);
      houseService = TestBed.inject(HouseService);
   });

   it('should create', () => {
      expect(component).toBeDefined();
   });
});
