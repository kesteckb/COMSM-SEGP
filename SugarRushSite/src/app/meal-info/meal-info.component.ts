import { Component, Input, OnInit } from '@angular/core';
import { IQuizAnswer, MealTitle } from '../food-quiz/food-quiz.component';
import { IFoodItem } from '../fooditem.service';

@Component({
  selector: 'app-meal-info',
  templateUrl: './meal-info.component.html',
  styleUrls: ['./meal-info.component.css']
})
export class MealInfoComponent implements OnInit {
  meal: MealTitle;
  @Input() item: IQuizAnswer;

  constructor() { }

  ngOnInit(): void {
  }

}
