import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameOverComponent } from './game-over/game-over.component';

const routes: Routes = [
   {path: 'game-over', component: GameOverComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
