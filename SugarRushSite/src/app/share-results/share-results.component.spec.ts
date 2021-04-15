import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareResultsComponent } from './share-results.component';

describe('ShareResultsComponent', () => {
  let component: ShareResultsComponent;
  let fixture: ComponentFixture<ShareResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShareResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
