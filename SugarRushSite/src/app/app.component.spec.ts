import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ModalComponent } from './modal/modal.component';
import { DataService } from './data.service';
import { HobbitService } from './hobbit.service';
import { FoodItemService } from './fooditem.service';
import { HouseService } from './house.service';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
         AppComponent
      ],
      providers: [
         DataService,
         HobbitService,
         FoodItemService,
         HouseService
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'sugarRush'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('sugarRush');
  });
});
