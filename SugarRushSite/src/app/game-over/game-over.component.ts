import { Component, OnInit } from '@angular/core';
import { HobbitService, IHobbit } from '../hobbit.service';
import { IFoodItem } from '../fooditem.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game-over',
  templateUrl: './game-over.component.html',
  styleUrls: ['./game-over.component.css'],
})
export class GameOverComponent implements OnInit {
   public hobbits: IHobbit[];
   public items: IFoodItem[] = [];
   public winStatus: boolean;
   public totalSugar: number;

   constructor(private hobbitService: HobbitService, private route: ActivatedRoute) { }

   ngOnInit(): void {
      this.getHobbits();
      this.getMeals();
      this.getWinStatus();
      this.getTotalSugar();
      // this.items = this.hobbitService.getAnswers();
     }

   getHobbits() {
      this.hobbitService
         .get()
         .subscribe((hobbits: IHobbit[]) => {
            this.hobbits = hobbits;
         });
   }

   getMeals() {
      this.items = this.hobbitService.getAnswers();
   }

   getWinStatus() {
     this.winStatus = this.hobbitService.getGameWin();
   }

   getTotalSugar() {
     this.totalSugar = this.hobbitService.getTotalSugar();
   }
}
