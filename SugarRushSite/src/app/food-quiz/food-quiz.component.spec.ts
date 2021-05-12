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

describe('FoodQuizComponent', () => {
   let component: FoodQuizComponent;
   let foodItemService: FoodItemService;
   let hobbitService: HobbitService;
   let fixture: ComponentFixture<FoodQuizComponent>;
   let html: DebugElement;

   beforeEach(async () => {
         await TestBed.configureTestingModule({
            declarations: [
               FoodQuizComponent
            ],
            imports: [
               HttpClientTestingModule,
               RouterModule.forRoot([])
            ],
            providers: [
               // FoodQuizComponent,
               {provide: FoodItemService, useClass: TestFoodItemService},
               {provide: HobbitService, useClass: TestHobbitService}
            ]
         })
         .compileComponents();
   })

   beforeEach(() => {
      fixture = TestBed.createComponent(FoodQuizComponent);
      component = fixture.componentInstance;
      component.hobbit = {
         name: "Test Hobbit",
         sugarTolerance: 42,
         sugarIntake: 0
      }
      html = fixture.debugElement;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeDefined();
   });

   it('should see next meal button', () => {
      let buttonName = html.query(By.css('.buttons button')).nativeElement.textContent;
      expect(buttonName).toContain("Next Meal");
   })

   describe('End Game Button Logic', () => {
      it('should see end game when quiz is finished', () => {
         component.cond_vall = true;
         fixture.detectChanges();
         let buttonName = html.query(By.css('.buttons button'))
            .nativeElement.textContent;
         expect(buttonName).toContain("End Game");

      })
      it('should be able to navigate to game end when enabled', () =>{
         component.cond_vall = true;
         fixture.detectChanges();
         let buttonElement = html.query(By.css('.buttons button')).attributes;
         console.log(buttonElement);
         expect(buttonElement["ng-reflect-router-link"]).toContain("/game-over");
      })
   })

});
