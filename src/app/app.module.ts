import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
<<<<<<< HEAD
import { GameOverComponent } from './game-over/game-over.component';
=======
import { HomeComponent } from './home/home.component';
>>>>>>> 562ddaa3e851c9e85ee377ca748dfaa128607932

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
<<<<<<< HEAD
    GameOverComponent
=======
    HomeComponent
>>>>>>> 562ddaa3e851c9e85ee377ca748dfaa128607932
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
