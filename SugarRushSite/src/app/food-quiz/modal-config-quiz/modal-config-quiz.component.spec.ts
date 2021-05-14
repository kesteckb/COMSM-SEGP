import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalConfigQuizComponent } from './modal-config.component';

describe('ModalConfigComponent', () => {
  let component: ModalConfigQuizComponent;
  let fixture: ComponentFixture<ModalConfigQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalConfigQuizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalConfigQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
