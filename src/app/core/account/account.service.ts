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

  listOfAccount: Account[] = [
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
  ];

  constructor(private http: HttpClient) {
    super()
  }

  getListOfAccount(): Observable<Account[]> {
    return of(this.listOfAccount);
  }

  getBalanceOf(address: string): Observable<string> {
    return of("100");
  }

  createAccount(password: string): Observable<Account> {
    let account: Account = {
      address: "0x000new",
      password: password,
      balanceOf: "0",
    };

    this.listOfAccount.push(account)

    return of(account);
  }

}