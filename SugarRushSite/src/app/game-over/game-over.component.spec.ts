import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterModule } from '@angular/router';
import { GameOverComponent } from './game-over.component';
import { HobbitService } from '../hobbit.service';
import { TestHobbitService } from '../testing/test-hobbit.service';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';

describe('GameOverComponent', () => {
   let component: GameOverComponent;
   let hobbitService: HobbitService;
   let fixture: ComponentFixture<GameOverComponent>;
   let html: DebugElement;

   beforeEach(() => {
      TestBed.configureTestingModule({
         declarations: [
            GameOverComponent
         ],
         imports: [
            HttpClientTestingModule,
            RouterModule.forRoot([])
         ],
         providers: [
            // GameOverComponent,
            {provided: HobbitService, useClass: TestHobbitService}
         ]
      })
      .compileComponents();
      // component = TestBed.inject(GameOverComponent);
      // hobbitService = TestBed.inject(HobbitService);
   });

   beforeEach(() => {
      fixture = TestBed.createComponent(GameOverComponent);
      component = fixture.componentInstance;
      html = fixture.debugElement;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });

   it('should see correct end game message', () => {
      component.winStatus = false;
      fixture.detectChanges();
      let message = html.query(By.css(".summaryInfo h3"))
         .nativeElement.textContent;
      expect(message).toContain("Better luck next time!");
      component.winStatus = true;
      fixture.detectChanges();
      message = html.query(By.css(".summaryInfo h3 > div"))
         .nativeElement.textContent;
      expect(message).toContain("You win!");
   });

   it('should see correct score', () => {
      component.totalSugar = 100;
      fixture.detectChanges();
      let score = html.query(By.css('.Score')).nativeElement.textContent;
      expect(score).toContain("100");
   });
});
