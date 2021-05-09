import { Component, Input, OnInit } from '@angular/core';
import { IFoodItem, MealTitle } from '../../fooditem.service';

@Component({
   selector: 'app-meal-info',
   templateUrl: './meal-info.component.html',
   styleUrls: ['./meal-info.component.css']
})
export class MealInfoComponent implements OnInit {
   @Input() mealTitle: MealTitle;
   @Input() mealFood: IFoodItem;
   constructor() { }

   ngOnInit(): void {
   }
}
