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

  getListOfAccount(): Observable<Account[]> {

    let listOfAccount: Account[] = [
      {
        address: "0x01",
        password: "123456",
        balanceOf: "1",
      },
      {
        address: "0x02",
        password: "123456",
        balanceOf: "2",
      },
      {
        address: "0x03",
        password: "123456",
        balanceOf: "3",
      },
      {
        address: "0x04",
        password: "123456",
        balanceOf: "4",
      },
    ];

    return of(listOfAccount);
  }

  getBalanceOf(address: string): Observable<string> {
    return of("100");
  }

}