import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SugarContentComponent } from './sugar-content.component';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';

fdescribe('SugarContentComponent', () => {
   let component: SugarContentComponent;
   let fixture: ComponentFixture<SugarContentComponent>;
   let html: DebugElement;

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         declarations: [ SugarContentComponent ]
      })
      .compileComponents();
   });

   beforeEach(() => {
      fixture = TestBed.createComponent(SugarContentComponent);
      component = fixture.componentInstance;
      component.foodItem = {
         name: "test",
         sugarAmount: 50,
         meals: [],
         imagePath: ""
      };
      component.showAnswer = false;
      html = fixture.debugElement;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });

   it('should have spoons', () => {
      expect(component.sugarInTeaspoons.length > 0).toBeTrue();
   })

   it('should show icon only when food selected', () => {
      let visibleValue = html.query(By.css('.iconWrapper'))
         .styles.visibility;
      expect(visibleValue === "hidden").toBeTrue();
      component.showAnswer = true;
      fixture.detectChanges();
      visibleValue = html.query(By.css('.iconWrapper'))
         .styles.visibility;
      expect(visibleValue === "visible").toBeTrue();
   });
});
