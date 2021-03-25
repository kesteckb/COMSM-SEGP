import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food-quiz',
  templateUrl: './food-quiz.component.html',
  styleUrls: ['./food-quiz.component.css']
})
export class FoodQuizComponent implements OnInit {

  constructor() { }
  typesOfFood: string[] = ['Broccoli', 'Croissant', 'Bagel', 'Protein Shake'];
  ngOnInit(): void {
  }

}
