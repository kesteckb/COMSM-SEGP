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
   //constructor(private hobbitService: HobbitService, private route: ActivatedRoute) { }

   constructor(private hobbitService: HobbitService, private route: ActivatedRoute) { }

   ngOnInit(): void {
      this.getHobbits();
      console.error("Items is array? " + Array.isArray(this.items));
      console.error("Answers is array? " + Array.isArray(this.hobbitService.getAnswers()));
      this.items = this.hobbitService.getAnswers();
     }

   getHobbits() {
      this.hobbitService
         .get()
         .subscribe((hobbits: IHobbit[]) => {
            this.hobbits = hobbits;
         });
   }
}
