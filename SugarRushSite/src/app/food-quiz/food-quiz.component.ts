import { Component, OnInit } from '@angular/core';
//import { DataService } from '../data.service';
import { FoodItemService, IFoodItem } from '../fooditem.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-food-quiz',
  templateUrl: './food-quiz.component.html',
  styleUrls: ['./food-quiz.component.css'],
})
export class FoodQuizComponent implements OnInit {

  public cond_vall: boolean = false;
  public totalSugar: number = 0;
  public answers: any = [];
  currentMeal: number = 0;

  // public foodItems = [
  //   {name: 'Banana', sugarAmount: 12.0},
  //   {name: 'Apple', sugarAmount: 10.0},
  //   {name: 'Protein Shake', sugarAmount: 23.0},
  // ];

  public meals = [
      {name: 'Breakfast', foodChoices: [0, 1, 2]},
      {name: 'Second Breakfast', foodChoices: [3, 4, 5]},
      {name: 'Elevenses', foodChoices: []},
      {name: 'Luncheon', foodChoices: []},
      {name: 'Afternoon Tea', foodChoices: []},
      {name: 'Dinner', foodChoices: []},
      {name: 'Supper', foodChoices: []}
  ];
  public foodItems: IFoodItem[];
  public currentFoodChoices: any = [];

  // stats: any = [];
  // currentdata = null;
  // currentIndex = -1;
  // title = '';

  // constructor(private dataService: DataService) { }
  constructor(private foodItemService: FoodItemService, private route: ActivatedRoute) { }

  ngOnInit() {
    //this.retrieveData();
    this.getFoodItems();
  }

  populateFoodChoices() {
      this.currentFoodChoices.length = 0;
      // for (let index of this.meals[this.currentMeal].foodChoices) {
      //     this.currentFoodChoices.push(this.foodItems[index]);
      // }

      for (let food of this.foodItems) {
          //var food = this.foodItems[i];
          if (food.meals.includes(this.currentMeal)) {
              this.currentFoodChoices.push(food);
          }
      }
      if(this.currentMeal == 6){
        this.cond_vall = true;
      }
  }

  // retrieveData() {
  //   this.dataService.getAll().subscribe(
  //       data => {
  //         this.stats = data;
  //         // now let's update the fields
  //         this.foodItems = this.stats.foodItems;
  //         this.meals = this.stats.meals;
  //       },
  //       error => {
  //         console.log(error);
  //       });
  //   this.populateFoodChoices();
  // }

  getFoodItems() {
      this.foodItemService
        .get()
        .subscribe((foodItems: IFoodItem[]) => {
            this.foodItems = foodItems;
            this.populateFoodChoices();
      });
      console.error(this.foodItems);
      //this.populateFoodChoices();
      console.error(this.currentFoodChoices);
  }

  selectAnswer(//selectedFood: {name: string, sugarAmount: number}
        selectedFood: any) {
      this.answers.push(selectedFood);
      this.totalSugar = this.totalSugar + selectedFood.sugarAmount;
  }

  answerIsCorrect(selectedSugarContent: number): boolean{
    // let index: number = this.meals[this.currentMeal].foodChoices[0];
    // let minSugarContent: number = Math.min(this.foodItems[index].sugarAmount,
    // this.foodItems[index + 1].sugarAmount, this.foodItems[index + 2].sugarAmount);
    let minSugarContent: number = Math.min(this.currentFoodChoices[0].sugarAmount,
        this.currentFoodChoices[1].sugarAmount,
        this.currentFoodChoices[2].sugarAmount);
    if(selectedSugarContent == minSugarContent){
      return true;
    }
    return false;
  }

  nextMeal() {
      if (this.currentMeal < 7) {
          this.currentMeal = this.currentMeal + 1;
          this.populateFoodChoices();
      }
  }
}
