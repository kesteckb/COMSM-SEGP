import { Component, OnInit, Input } from '@angular/core';
import { HobbitService, IHobbit } from '../hobbit.service';
import { ActivatedRoute } from '@angular/router';

@Component({
   selector: 'app-quiz-progress',
   templateUrl: './quiz-progress.component.html',
   styleUrls: ['./quiz-progress.component.css']
})
export class QuizProgressComponent implements OnInit {
   @Input() hobbit?: IHobbit;
   dailySugar: number = 50;
   teaspoons: any[];

   constructor(private hobbitService: HobbitService, private route: ActivatedRoute) { }

   ngOnInit(): void {
      // this.dailySugar = this.hobbit.sugarTolerance;
      console.log(this.dailySugar + " is the sugar cap.");
      this.convertGramsToTsp();
   }

   convertGramsToTsp(){
      let returnVal = Math.round(this.dailySugar / 4.2);
      console.log(returnVal);
      this.teaspoons = Array(returnVal);
      console.log(this.teaspoons + " is the number of teaspoons" +
         " the hobbit can have.");
   }
}
