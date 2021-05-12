import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterModule } from '@angular/router';
import { QuizProgressComponent } from './quiz-progress.component';
import { HobbitService } from '../../hobbit.service';
import { TestHobbitService } from '../../testing/test-hobbit.service';

describe('QuizProgressComponent', () => {
   let component: QuizProgressComponent;
   let hobbitService: HobbitService;
   let fixture: ComponentFixture<QuizProgressComponent>;

   beforeEach(() => {
      TestBed.configureTestingModule({
         imports: [
            HttpClientTestingModule,
            RouterModule.forRoot([])
         ],
         providers: [
            QuizProgressComponent,
            {provided: HobbitService, useClass: TestHobbitService}
         ]
      })
      .compileComponents();
   })

   beforeEach(() => {
      fixture = TestBed.createComponent(QuizProgressComponent);
      component = fixture.componentInstance;
      component.hobbit = {
         name: "Test Hobbit",
         sugarTolerance: 42,
         sugarIntake: 0
      }
      component.sugarLevel = 0;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeDefined();
   });

   it('should have hobbit sugar tolerance', () => {
      expect(component.sugarLimit === 42).toBeTrue();
   });

   it('should have ten spoon limit', () => {
      expect(component.goalTeaspoons.length === 10).toBeTrue();
   });

   describe('Spoon Levels', () => {
      it('should have zero spoons on init', () => {
         component.ngOnChanges();
         expect(component.currentTeaspoons.length === 0).toBeTrue();
      });

      it('should have more than zero spoons on change', () =>{
         component.sugarLevel = 10;
         component.ngOnChanges();
         expect(component.currentTeaspoons.length > 0).toBeTrue();
      })
   })
});
