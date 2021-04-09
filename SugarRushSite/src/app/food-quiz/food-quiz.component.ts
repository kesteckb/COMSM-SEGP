import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-food-quiz',
  templateUrl: './food-quiz.component.html',
  styleUrls: ['./food-quiz.component.css'],
})
export class FoodQuizComponent implements OnInit {

  public totalSugar: number = 0;
  public answers: any = [];
  currentMeal: number = 0;

  public foodItems = [
    {name: 'Banana', sugarContent: 12.0},
    {name: 'Apple', sugarContent: 10.0},
    {name: 'Protein Shake', sugarContent: 23.0},
  ];

  public meals = [
      {name: 'Breakfast', foodChoices: [0, 1, 2]},
      {name: 'Second Breakfast', foodChoices: [3, 4, 5]}
  ];

  public currentFoodChoices: any = [];

  stats: any = [];
  currentdata = null;
  currentIndex = -1;
  title = '';

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.retrieveData();
    //populate food choices of first meal
  }

  populateFoodChoices() {
      this.currentFoodChoices.length = 0;
      for (let index of this.meals[this.currentMeal].foodChoices) {
          this.currentFoodChoices.push(this.foodItems[index]);
      }
  }

  retrieveData() {
    this.dataService.getAll().subscribe(
        data => {
          this.stats = data;
          // now let's update the fields
          this.foodItems = this.stats.foodItems;
          this.meals = this.stats.meals;
        },
        error => {
          console.log(error);
        });
    this.populateFoodChoices();
  }

  selectAnswer(selectedFood: {name: string, sugarContent: number}) {
      this.answers.push(selectedFood);
      this.totalSugar = this.totalSugar + selectedFood.sugarContent;
  }

  answerIsCorrect(selectedSugarContent: number): boolean{
    let minSugarContent: number = Math.min(this.foodItems[0].sugarContent,
    this.foodItems[1].sugarContent, this.foodItems[2].sugarContent);
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
