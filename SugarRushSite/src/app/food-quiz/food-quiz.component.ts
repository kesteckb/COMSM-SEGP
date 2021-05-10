import { Component, OnInit } from '@angular/core';
//import { DataService } from '../data.service';
import { FoodItemService, IFoodItem, MealTitle } from '../fooditem.service';
import { ActivatedRoute } from '@angular/router';
import { HobbitService, IHobbit } from '../hobbit.service';

@Component({
   selector: 'app-food-quiz',
   templateUrl: './food-quiz.component.html',
   styleUrls: ['./food-quiz.component.css'],
})
export class FoodQuizComponent implements OnInit {
   public hobbit: IHobbit;
   public cond_vall: boolean = false;
   public totalSugar: number = 0;
   public answers: any = [];
   currentMeal: number = 0;

   public meals = [
      {name: MealTitle.BREAKFAST},
      {name: MealTitle.SECOND_BREAKFAST},
      {name: MealTitle.ELEVENSES},
      {name: MealTitle.LUNCHEON},
      {name: MealTitle.AFTERNOON_TEA},
      {name: MealTitle.DINNER},
      {name: MealTitle.SUPPER}
   ];
   public foodItems: IFoodItem[];
   public currentFoodChoices: any = [];

   constructor(private foodItemService: FoodItemService, private hobbitService: HobbitService, private route: ActivatedRoute) { }

   ngOnInit() {
      this.getFoodItems();
      this.hobbitService.clearAnswers();
      this.hobbit = this.hobbitService.getHobbit(0);
      console.log("This hobbit's name is " + this.hobbit.name);
   }

   populateFoodChoices() {
      this.currentFoodChoices.length = 0;
      for (let food of this.foodItems) {
          if (food.meals.includes(this.currentMeal)) {
              this.currentFoodChoices.push(food);
          }
      }
      if(this.currentMeal == 6){
        this.cond_vall = true;
      }
  }

  getFoodItems() {
      this.foodItemService
        .get()
        .subscribe((foodItems: IFoodItem[]) => {
            this.foodItems = foodItems;
            this.populateFoodChoices();
      });
  }

  selectAnswer(selectedFood: any) {
      this.answers.push(selectedFood);
      this.hobbitService.addToAnswers(selectedFood);
      this.totalSugar = this.totalSugar + selectedFood.sugarAmount;
  }

  answerIsCorrect(selectedSugarContent: number): boolean{
    let minSugarContent: number = Math.min(this.currentFoodChoices[0].sugarAmount,
        this.currentFoodChoices[1].sugarAmount,
        this.currentFoodChoices[2].sugarAmount);
    if(selectedSugarContent == minSugarContent){
      return true;
    }
    return false;
  }

  belowMaxSugar(): boolean{
    this.hobbitService.setTotalSugar(this.totalSugar);
    if(this.totalSugar < 100){
      this.hobbitService.setGameWin(true);
      return true;
    }
    this.hobbitService.setGameWin(false);
    return false;
  }

  nextMeal() {
    if (this.currentMeal < 7) {
        this.currentMeal = this.currentMeal + 1;
        this.populateFoodChoices();
    }
  }
}
