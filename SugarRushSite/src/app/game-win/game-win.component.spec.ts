import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameWinComponent } from './game-win.component';

describe('GameWinComponent', () => {
  let component: GameWinComponent;
  let fixture: ComponentFixture<GameWinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameWinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameWinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
