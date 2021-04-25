import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HobbitService } from '../hobbit.service';
import { IFoodItem } from '../fooditem.service';
import { IQuizAnswer } from '../food-quiz/food-quiz.component';

@Component({
   selector: 'app-meal-modal',
   templateUrl: './meal-modal.component.html',
   styleUrls: ['./meal-modal.component.css']
})
export class MealModalComponent implements OnInit {
   items: IQuizAnswer[] = [];

   constructor(@Inject(MAT_DIALOG_DATA) public data: {hobbitService: HobbitService}) { }

   ngOnInit(): void {
      this.items = this.data.hobbitService.getAnswers();
   };

}
