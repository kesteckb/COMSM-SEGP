import { Component, OnInit, Input } from '@angular/core';
import { HobbitService, IHobbit } from '../hobbit.service';
import { ActivatedRoute } from '@angular/router';

@Component({
   selector: 'app-quiz-progress',
   templateUrl: './quiz-progress.component.html',
   styleUrls: ['./quiz-progress.component.css']
})
export class QuizProgressComponent implements OnInit {
   @Input() hobbit: IHobbit;
   @Input() sugarLevel: number;
   sugarLimit: number;
   goalTeaspoons: any[];
   currentTeaspoons: any[];
   teaspoonRemain: number;

   constructor(private hobbitService: HobbitService, private route: ActivatedRoute) { }

   ngOnInit(): void {
      this.sugarLimit = this.hobbit.sugarTolerance;
      console.log(this.sugarLimit + " is the sugar cap.");
      this.setSpoonGoal();
      console.log(this.goalTeaspoons.length + " is the number of teaspoons" +
         " the hobbit can have.");
   }

   ngOnChanges(): void{
      this.sugarLimit = this.hobbit.sugarTolerance;
      this.setSpoonGoal();
      this.setCurrentSpoons();
      console.log("Current sugar level: " + this.sugarLevel + ", " + this.currentTeaspoons.length);
      console.log("Sugar cap: " + this.sugarLimit + ", " + this.goalTeaspoons.length);
   }

   convertGramsToTsp(grams: number){
      return grams / 4.2;
   }

   setSpoonGoal(){
      let goalSpoons = this.convertGramsToTsp(this.sugarLimit);
      let spoonCount = Math.floor(goalSpoons);
      //Give players extra spoon if the requirement falls on a decimal
      if (goalSpoons % 1 > 0.0001){
         spoonCount++;
      }
      //Turn into array so we can loop in HTML
      this.goalTeaspoons = Array(spoonCount);
   }

   setCurrentSpoons(){
      let currentSpoons = this.convertGramsToTsp(this.sugarLevel);
      if (this.sugarLevel > this.sugarLimit * 2){
         this.currentTeaspoons = Array(this.goalTeaspoons.length * 2);
         this.teaspoonRemain = 0;
      }
      else{
         this.currentTeaspoons = Array(Math.floor(currentSpoons));
         //Use to get a partial icon if there is one.
         //Multiply by 100, round, divide by 100 to maintain only 2 percentage points
         this.teaspoonRemain = Math.round((currentSpoons % 1) * 100);
      }
   }

   getRemainPercentage(){
      return this.teaspoonRemain + "%";
   }

   getStatusColour(){
      let goalSpoons = this.goalTeaspoons.length;
      let currentSpoons = this.convertGramsToTsp(this.sugarLevel);
      console.log("comparing goal and current" + goalSpoons + "<==>" + currentSpoons);
      console.log("this is the current number of spoons")
      if (currentSpoons > goalSpoons){
         return "red";
      }
      if (currentSpoons > (goalSpoons * .75)){
         return "orangered";
      }
      return "black";
   }
}
