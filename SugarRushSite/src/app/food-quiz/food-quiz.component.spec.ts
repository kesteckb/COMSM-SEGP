import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterModule } from '@angular/router';
import { FoodQuizComponent } from './food-quiz.component';
import { FoodItemService } from '../fooditem.service';
import { TestFoodItemService } from '../testing/test-fooditem.service';
import { HobbitService } from '../hobbit.service';
import { TestHobbitService } from '../testing/test-hobbit.service';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';

fdescribe('FoodQuizComponent', () => {
   let component: FoodQuizComponent;
   let foodItemService: FoodItemService;
   let hobbitService: HobbitService;
   let fixture: ComponentFixture<FoodQuizComponent>;
   let html: DebugElement;

   beforeEach(async () => {
         await TestBed.configureTestingModule({
            imports: [
               HttpClientTestingModule,
               RouterModule.forRoot([])
            ],
            providers: [
               FoodQuizComponent,
               {provide: FoodItemService, useClass: TestFoodItemService},
               {provide: HobbitService, useClass: TestHobbitService}
            ]
         })
         .compileComponents();
         // component = TestBed.inject(FoodQuizComponent);
         // foodItemService = TestBed.inject(FoodItemService);
         // hobbitService = TestBed.inject(HobbitService);
   })

   beforeEach(() => {
      fixture = TestBed.createComponent(FoodQuizComponent);
      component = fixture.componentInstance;
      component.hobbit = {
         name: "Test Hobbit",
         sugarTolerance: 42,
         sugarIntake: 0
      }
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeDefined();
   });

   it('should not be able to click next meal button', () => {

   })
});
