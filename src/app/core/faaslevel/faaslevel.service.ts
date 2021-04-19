import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable, throwError, of } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


import { WrapRes, ServiceErrorHandler } from '../wrap'

export interface FaaSLevel {
  id: string;
  cpu: string;
  mem: string;
}

export interface ListData {
  levels: FaaSLevel[]
}


@Injectable({
  providedIn: 'root'
})
export class FaaslevelService extends ServiceErrorHandler {

  constructor(
    private http: HttpClient) {
    super()
  }

  getFaaSLevels(): Observable<FaaSLevel[]> {

    let levels: FaaSLevel[] = [];

    this.http.get<WrapRes<ListData>>("").pipe(
      catchError(this.handleError<ListData>('FaaslevelService.getFaaSLevels', undefined))
    );

    return of(levels)
  }

}



