import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VillageComponent } from './village.component';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

describe('VillageComponent', () => {
   let component: VillageComponent;
   let fixture: ComponentFixture<VillageComponent>;

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         declarations: [ VillageComponent ],
         imports: [
            HttpClientModule,
            RouterModule.forRoot([])
         ]
      })
      .compileComponents();
   });

   beforeEach(() => {
      fixture = TestBed.createComponent(VillageComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
