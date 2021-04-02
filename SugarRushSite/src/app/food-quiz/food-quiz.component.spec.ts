import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodQuizComponent } from './food-quiz.component';

describe('FoodQuizComponent', () => {
  let component: FoodQuizComponent;
  let fixture: ComponentFixture<FoodQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodQuizComponent ]
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
