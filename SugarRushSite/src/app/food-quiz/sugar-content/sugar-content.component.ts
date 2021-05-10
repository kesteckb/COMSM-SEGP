import { Component, OnInit, Input } from '@angular/core';
import { IFoodItem } from '../../fooditem.service';
import SpoonConversion from '../spoon-conversion';

@Component({
   selector: 'app-sugar-content',
   templateUrl: './sugar-content.component.html',
   styleUrls: ['./sugar-content.component.css']
})
export class SugarContentComponent implements OnInit {
   @Input() foodItem: IFoodItem;
   @Input() showAnswer: boolean;
   sugarInGrams: number;
   sugarInTeaspoons: any[];
   teaspoonRemain: string;
   constructor() { }

   ngOnInit(): void {
      this.setFoodSugar();
   }

   setFoodSugar(){
      this.sugarInGrams = this.foodItem.sugarAmount;
      let teaspoons = SpoonConversion.getNumberOfSpoons(this.sugarInGrams);
      this.sugarInTeaspoons = Array(teaspoons);
      this.teaspoonRemain = SpoonConversion.getSpoonRemainder(this.sugarInGrams)
   }

   getRemainPercentage(){
      return this.teaspoonRemain;
   }

   getStatusColour(){
      let teaspoons = SpoonConversion.getNumberOfSpoons(this.sugarInGrams);
      if (teaspoons < 1.5){
         return "green";
      }
      if (teaspoons < 3){
         return "orangered";
      }
      return "red";
   }

   getVisibility(){
      if (this.showAnswer){
         return "visible";
      }
      return "hidden";
   }
}
