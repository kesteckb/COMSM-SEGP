import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SugarContentComponent } from './sugar-content.component';

describe('SugarContentComponent', () => {
  let component: SugarContentComponent;
  let fixture: ComponentFixture<SugarContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SugarContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SugarContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
