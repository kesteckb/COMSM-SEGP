import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { IFoodItem } from './fooditem.service'
import { catchError, retry } from 'rxjs/operators';
import { map, filter, switchMap } from 'rxjs/operators';
import { IQuizAnswer} from './food-quiz/food-quiz.component'

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

   public quizAnswers: IQuizAnswer[] = [];
   public gameWin: boolean;
   public totalSugar: number;

   constructor(private httpClient: HttpClient) { }

   get(params = {}) {
      return this.httpClient.get<IHobbit[]>(API, { params });
   }

   addToAnswers(quizAnswer: IQuizAnswer) {
      this.quizAnswers.push(quizAnswer);
   }

   public getAnswers() {
      return this.quizAnswers;
   }

   setGameWin(currentValue: boolean) {
     this.gameWin = currentValue;
   }

   getGameWin() {
     return this.gameWin;
   }

   setTotalSugar(currentValue: number) {
     this.totalSugar = currentValue;
   }

   getTotalSugar() {
     return this.totalSugar;
   }

   clearAnswers() {
      this.quizAnswers = [];
      return this.quizAnswers;
   }

   getValue() { return this.getValue(); }
}
