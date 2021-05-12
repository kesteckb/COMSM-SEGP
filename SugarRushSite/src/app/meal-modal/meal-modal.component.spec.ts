import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterModule } from '@angular/router';
import { MealModalComponent } from './meal-modal.component';
import { HobbitService } from '../hobbit.service';
import { TestHobbitService } from '../testing/test-hobbit.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

describe('MealModalComponent', () => {
   let component: MealModalComponent;
   let hobbitService: HobbitService;
   let fixture: ComponentFixture<MealModalComponent>;

   beforeEach(() => {
      TestBed.configureTestingModule({
         imports: [
            HttpClientTestingModule,
            RouterModule.forRoot([])
         ],
         providers: [
            MealModalComponent,
            {provide: HobbitService, useClass: TestHobbitService},
            {provide: MAT_DIALOG_DATA, useValue: {}}
         ]
      });
      component = TestBed.inject(MealModalComponent);
      hobbitService = TestBed.inject(HobbitService);
   })

   // beforeEach(() => {
   //    fixture = TestBed.createComponent(MealModalComponent);
   //    component = fixture.componentInstance;
   //    fixture.detectChanges();
   // });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
