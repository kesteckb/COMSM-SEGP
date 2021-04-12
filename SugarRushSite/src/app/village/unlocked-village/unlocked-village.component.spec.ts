import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnlockedVillageComponent } from './unlocked-village.component';

describe('UnlockedVillageComponent', () => {
  let component: UnlockedVillageComponent;
  let fixture: ComponentFixture<UnlockedVillageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnlockedVillageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnlockedVillageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
