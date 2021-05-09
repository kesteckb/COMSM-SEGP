import { Component, Input, OnInit } from '@angular/core';
import { IFoodItem, MealTitle } from '../../fooditem.service';

@Component({
   selector: 'app-meal-info',
   templateUrl: './meal-info.component.html',
   styleUrls: ['./meal-info.component.css']
})
export class MealInfoComponent implements OnInit {
   @Input() mealIndex: number;
   @Input() mealFood: IFoodItem;
   mealTitle: string;

   constructor() { }

   ngOnInit(): void {
      this.mealTitle = Object.values(MealTitle)[this.mealIndex];
   }
}
