import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterModule } from '@angular/router';
import { FoodQuizComponent } from './food-quiz.component';
import { FoodItemService } from '../fooditem.service';
import { TestFoodItemService } from '../testing/test-fooditem.service';
import { HobbitService } from '../hobbit.service';
import { TestHobbitService } from '../testing/test-hobbit.service';

describe('FoodQuizComponent', () => {
   let component: FoodQuizComponent;
   let foodItemService: FoodItemService;
   let hobbitService: HobbitService;

   beforeEach(() => {
         TestBed.configureTestingModule({
            imports: [
               HttpClientTestingModule,
               RouterModule.forRoot([])
            ],
            providers: [
               FoodQuizComponent,
               {provided: FoodItemService, useClass: TestFoodItemService},
               {provided: HobbitService, useClass: TestHobbitService}
            ]
         });
         component = TestBed.inject(FoodQuizComponent);
         foodItemService = TestBed.inject(FoodItemService);
         hobbitService = TestBed.inject(HobbitService);
   })

   it('should create', () => {
      expect(component).toBeDefined();
   });
});
