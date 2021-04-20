import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable, throwError, of } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


import { WrapRes, ServiceErrorHandler } from '../wrap'

export interface Account {
  address: string;
  password: string;
  balanceOf: string;
}


@Injectable({
  providedIn: 'root'
})

export class AccountService extends ServiceErrorHandler {

  constructor(private http: HttpClient) {
    super()
  }
}