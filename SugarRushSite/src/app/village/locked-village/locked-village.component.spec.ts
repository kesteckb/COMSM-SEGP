import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LockedVillageComponent } from './locked-village.component';

describe('LockedVillageComponent', () => {
  let component: LockedVillageComponent;
  let fixture: ComponentFixture<LockedVillageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LockedVillageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LockedVillageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
