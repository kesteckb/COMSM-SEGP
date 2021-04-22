import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FoodQuizComponent } from './food-quiz.component';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FoodItemService, IFoodItem } from '../fooditem.service';
import { HobbitService } from '../hobbit.service';


describe('FoodQuizComponent', () => {
  let component: FoodQuizComponent;
  let fixture: ComponentFixture<FoodQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodQuizComponent ],
      imports: [
         HttpClientModule,
         RouterModule.forRoot([])
      ],
      // providers: [
      //    HobbitService,
      //    FoodItemService
      // ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
