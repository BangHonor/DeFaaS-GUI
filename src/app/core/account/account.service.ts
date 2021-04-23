import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable, throwError, of } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { NzMessageService } from 'ng-zorro-antd/message';


import { WrapRes, ServiceErrorHandler } from '../wrap'

export interface Account {
  address: string;
  password: string;
  balanceOf: string;
  eth?: string;
  isWitness?: boolean;
  witnessState?: boolean;
  witnessReward?: string;
  isProvider?: boolean;
  providerState?: string;
  otherInfo?: string[];
}


@Injectable({
  providedIn: 'root'
})

export class AccountService extends ServiceErrorHandler {

  // address -> Account
  // address is a string
  accounts: Map<string, Account>;


  constructor(
    private http: HttpClient,
    private message: NzMessageService) {
    super();

    this.loadAccountsFromServer();
  }

  private loadAccountsFromServer(): void {

    this.accounts = new Map();

    let origin: Account = {
      address: "0x000origin",
      password: "123456",
      balanceOf: "1",
    };

    this.accounts.set("0x000origin", origin);

    this.message.success('加载本地账户数据成功');
  }

  getListOfAccount(): Observable<Account[]> {
    // 返回成员数据
    return of([...this.accounts.values()]);
  }

  getBalanceOf(address: string): Observable<string> {

    if (!this.accounts.has(address)) {
      this.message.error('账户不存在');
      return undefined;
    }

    let account: Account = this.accounts.get(address);

    // 从服务端取数据
    let newBalanceOf: string = account.balanceOf + "6";

    // 更新成员数据
    account.balanceOf = newBalanceOf;
    this.accounts.set(address, account);

    this.message.success('获取FaaS Token 余额成功');
    return of(newBalanceOf);
  }

  createAccount(password: string): Observable<Account> {

    // get a new account from server
    let account: Account = {
      address: "0x000" + this.accounts.size,
      password: password,
      balanceOf: "0",
    };

    this.accounts.set(account.address, account);

    this.message.success('新建账户成功');

    return of(account);
  }

  getAccount(address: string): Observable<Account> {

    if (!this.accounts.has(address)) {
      this.message.error('账户不存在');
      return undefined;
    }

    return of(this.accounts.get(address));
  }


  witnessLogin(address: string): void {

    let account: Account = this.accounts.get(address);
    account.isWitness = true;
    this.accounts.set(address, account);

    this.message.success('注册证人成功');
  }

  witnessLogout(address: string): void {

    let account: Account = this.accounts.get(address);
    account.isWitness = false;
    this.accounts.set(address, account);

    this.message.success('注销证人成功');
  }

}