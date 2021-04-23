import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterModule } from '@angular/router';
import { GameOverComponent } from './game-over.component';
import { HobbitService } from '../hobbit.service';
import { TestHobbitService } from '../testing/test-hobbit.service';

describe('GameOverComponent', () => {
   let component: GameOverComponent;
   let hobbitService: HobbitService;

   beforeEach(() => {
      TestBed.configureTestingModule({
         imports: [
            HttpClientTestingModule,
            RouterModule.forRoot([])
         ],
         providers: [
            GameOverComponent,
            {provided: HobbitService, useClass: TestHobbitService}
         ]
      })
      component = TestBed.inject(GameOverComponent);
      hobbitService = TestBed.inject(HobbitService);
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
