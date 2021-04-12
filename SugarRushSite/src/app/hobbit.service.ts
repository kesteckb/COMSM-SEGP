import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
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

   constructor(private httpClient: HttpClient) { }

   get(params = {}) {
      return this.httpClient.get(API, { params });
   }
}
