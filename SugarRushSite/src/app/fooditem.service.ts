import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { map, filter, switchMap } from 'rxjs/operators';

export interface IFoodItem {
      _id ?: string;
      name : string;
      sugarAmount : number;
      meals : number[];
      imagePath : string;
}

const API = '/fooditems';

export enum MealTitle {
  BREAKFAST = 'Breakfast',
  SECOND_BREAKFAST = 'Second Breakfast',
  ELEVENSES = 'Elevenses',
  LUNCHEON = 'Luncheon',
  AFTERNOON_TEA = 'Afternoon Tea',
  DINNER = 'Dinner',
  SUPPER = 'Supper',
}

@Injectable({
  providedIn: 'root'
})
export class FoodItemService {

    constructor(private httpClient: HttpClient) { }

     get(params = {}) {
        return this.httpClient.get<IFoodItem[]>(API, { params });
     }

     getValue() { return this.getValue(); }

     getName() { return this.getName(); }

     checkExists(){
        return true;
     }
}
