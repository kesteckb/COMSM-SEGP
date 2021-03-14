import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { HomeComponent } from './home/home.component';
import { GameOverComponent } from './game-over/game-over.component';
import { GameWinComponent } from './game-win/game-win.component';
import { FoodQuizComponent } from './food-quiz/food-quiz.component';
import { GenericErrorComponent } from './generic-error/generic-error.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    HomeComponent,
    GameOverComponent,
    GameWinComponent,
    FoodQuizComponent,
    GenericErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
