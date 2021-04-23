import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { IFoodItem } from './fooditem.service'
import { catchError, retry } from 'rxjs/operators';
import { map, filter, switchMap } from 'rxjs/operators';

export interface IHobbit {
      _id ?: string;
      name : string;
      sugarTolerance : number;
      house ?: number;
}

const API = '/hobbits';

@Injectable({
  providedIn: 'root'
})
export class HobbitService {

   quizAnswers: IFoodItem[] = [];

   constructor(private httpClient: HttpClient) { }

   get(params = {}) {
      return this.httpClient.get<IHobbit[]>(API, { params });
   }

   addToAnswers(foodItem) {
      this.quizAnswers.push(foodItem);
   }

   getAnswers() {
      return this.quizAnswers;
   }

   clearAnswers() {
      this.quizAnswers = [];
      return this.quizAnswers;
   }

   getValue() { return this.getValue(); }
}
