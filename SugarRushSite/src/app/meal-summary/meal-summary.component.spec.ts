import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterModule } from '@angular/router';
import { MealSummaryComponent } from './meal-summary.component';
import { MatDialogModule } from '@angular/material/dialog';
import { HobbitService } from '../hobbit.service';
import { TestHobbitService } from '../testing/test-hobbit.service';

describe('MealSummaryComponent', () => {
   let component: MealSummaryComponent;
   let hobbitService: HobbitService;
   let fixture: ComponentFixture<MealSummaryComponent>;

   beforeEach(() => {
      TestBed.configureTestingModule({
         imports: [
            HttpClientTestingModule,
            RouterModule.forRoot([]),
            MatDialogModule
         ],
         providers: [
            MealSummaryComponent,
            {provided: HobbitService, useClass: TestHobbitService}
         ]
      });
      component = TestBed.inject(MealSummaryComponent);
      hobbitService = TestBed.inject(HobbitService);
   })

   it('should create', () => {
      expect(component).toBeDefined();
   });
});
