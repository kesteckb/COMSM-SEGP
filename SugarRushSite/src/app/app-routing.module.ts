import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VillageComponent } from './village/village.component';
import { FoodQuizComponent } from './food-quiz/food-quiz.component';
import { GameOverComponent } from './game-over/game-over.component';
import { GameWinComponent } from './game-win/game-win.component';
import { GenericErrorComponent } from './generic-error/generic-error.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component'

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'village', component: VillageComponent},
  {path: 'food-quiz', component: FoodQuizComponent},
  {path: 'game-over', component: GameOverComponent},
  {path: 'game-win', component: GameWinComponent},
  {path: 'generic-error', component: GenericErrorComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
