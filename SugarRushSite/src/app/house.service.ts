import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { map, filter, switchMap } from 'rxjs/operators';

export interface IHouse {
   _id ?: string;
   name : string;
}

const API = '/houses';

@Injectable({
   providedIn: 'root'
})
export class HouseService {

   constructor(private httpClient: HttpClient) { }

   get(params = {}) {
      return this.httpClient.get<IHouse[]>(API, { params });
   }
}
