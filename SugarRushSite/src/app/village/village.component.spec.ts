import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VillageComponent } from './village.component';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { HouseService } from '../house.service';

describe('VillageComponent', () => {
   let component: VillageComponent;
   let fixture: ComponentFixture<VillageComponent>;

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         declarations: [ VillageComponent ],
         imports: [
            HttpClientModule,
            RouterModule.forRoot([])
         ],
         providers: [
            HouseService
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
