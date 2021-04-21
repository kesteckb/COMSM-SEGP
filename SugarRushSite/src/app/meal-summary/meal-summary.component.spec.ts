import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MealSummaryComponent } from './meal-summary.component';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

describe('MealSummaryComponent', () => {
  let component: MealSummaryComponent;
  let fixture: ComponentFixture<MealSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MealSummaryComponent ],
      imports: [
         HttpClientModule,
         RouterModule.forRoot([])
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MealSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
