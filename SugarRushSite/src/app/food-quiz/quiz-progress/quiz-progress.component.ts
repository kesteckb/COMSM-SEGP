import { Component, OnInit, Input } from '@angular/core';
import { HobbitService, IHobbit } from '../../hobbit.service';
import { ActivatedRoute } from '@angular/router';
import SpoonConversion from '../spoon-conversion';

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
   teaspoonRemain: string;

   constructor(private hobbitService: HobbitService, private route: ActivatedRoute) { }

   ngOnInit(): void {
      this.sugarLimit = this.hobbit.sugarTolerance;
      this.setSpoonGoal();
   }

   ngOnChanges(): void {
      this.setCurrentSpoons();
   }

   setSpoonGoal(){
      let teaspoons = SpoonConversion.getNumOfSpoonsRounded(this.sugarLimit);
      //Turn into array so we can loop in HTML
      this.goalTeaspoons = Array(teaspoons);
   }

   setCurrentSpoons(){
      if (this.sugarLevel > this.sugarLimit * 2){
         this.currentTeaspoons = Array(this.goalTeaspoons.length * 2);
         this.teaspoonRemain = "0%";
      }
      else{
         let teaspoons = SpoonConversion.getNumberOfSpoons(this.sugarLevel);
         this.currentTeaspoons = Array(teaspoons);
         //Use to get a partial icon if there is one.
         this.teaspoonRemain = SpoonConversion.getSpoonRemainder(this.sugarLevel);
      }
   }

   getRemainPercentage(){
      return this.teaspoonRemain;
   }

   getStatusColour(){
      let goalSpoons = this.goalTeaspoons.length;
      let currentSpoons = SpoonConversion.convertGramsToTsp(this.sugarLevel);
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
