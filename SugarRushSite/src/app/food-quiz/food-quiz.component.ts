import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-food-quiz',
  templateUrl: './food-quiz.component.html',
  styleUrls: ['./food-quiz.component.css']
})
export class FoodQuizComponent implements OnInit {

  typesOfFood: string[] = ['Broccoli', 'Croissant', 'Bagel', 'Protein Shake'];
	
  public foodItems = ['brocolli', 'croissant', 'bagel', 'protein shake'];
  public foodData = [
    {name: 'brocolli', sugar: 1.7},
    {name: 'croissant', sugar: 11.0},
    {name: 'bagel', sugar: 6.0},
    {name: 'protein shake', sugar: 23.0}
  ];
  
  
  stats: any = [];
  currentdata = null;
  currentIndex = -1;
  title = '';

  public radarChartType = 'radar';

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.retrieveData();
  }

  retrieveData() {
    this.dataService.getAll().subscribe(
        data => {
          this.stats = data;
          // now let's update the fields
          this.foodItems = this.stats.foodItems;
          this.foodData = this.stats.foodData;
        },
        error => {
          console.log(error);
        });
  }

}
