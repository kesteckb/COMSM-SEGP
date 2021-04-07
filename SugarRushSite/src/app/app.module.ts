import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {DataService} from './data.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { HomeComponent } from './home/home.component';
import { GameOverComponent } from './game-over/game-over.component';
import { GameWinComponent } from './game-win/game-win.component';
import { FoodQuizComponent } from './food-quiz/food-quiz.component';
import { GenericErrorComponent } from './generic-error/generic-error.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatListModule} from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalComponent } from './modal/modal.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { VillageComponent } from './village/village.component';
import { LockedVillageComponent } from './village/locked-village/locked-village.component'
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ModalConfigComponent } from './village/modal-config/modal-config.component';
import { UnlockedVillageComponent } from './village/unlocked-village/unlocked-village.component';
import { MealSummaryComponent } from './meal-summary/meal-summary.component';
import {MatDialogModule} from '@angular/material/dialog';
import { MealInfoComponent } from './meal-info/meal-info.component';
import { MealModalComponent } from './meal-modal/meal-modal.component';
import { ShareResultsComponent } from './share-results/share-results.component';
import { ShareModalComponent } from './share-modal/share-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    HomeComponent,
    GameOverComponent,
    GameWinComponent,
    FoodQuizComponent,
    GenericErrorComponent,
    ModalComponent,
    PageNotFoundComponent,
    VillageComponent,
    LockedVillageComponent,
    ModalConfigComponent,
    UnlockedVillageComponent,
    MealSummaryComponent,
    MealModalComponent,
    MealInfoComponent,
    ShareResultsComponent,
    ShareModalComponent
  ],
  entryComponents: [
     MealSummaryComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatProgressBarModule,
    MatListModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    MatDialogModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
