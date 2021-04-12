import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealModalComponent } from './meal-summary-content.component';

describe('MealSummaryContentComponent', () => {
  let component: MealModalComponent;
  let fixture: ComponentFixture<MealModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MealModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MealModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
