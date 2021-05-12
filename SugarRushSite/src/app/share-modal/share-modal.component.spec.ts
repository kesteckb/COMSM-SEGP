import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterModule } from '@angular/router';
import { ShareModalComponent } from './share-modal.component';
import { NgSocialLinksService } from 'ng-social-links';
import { TestHobbitService } from '../testing/test-hobbit.service';


describe('ShareModalComponent', () => {
  let component: ShareModalComponent;
  let fixture: ComponentFixture<ShareModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
         HttpClientTestingModule,
         RouterModule.forRoot([])
      ],
      providers: [
         ShareModalComponent,
         {provide: NgSocialLinksService, useValue: ""}
      ]
   });
   component = TestBed.inject(ShareModalComponent);
   TestBed.inject(NgSocialLinksService);
  })

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(ShareModalComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
