import { Component, OnInit } from '@angular/core';

import { Account, AccountService } from '../../core/account/account.service'

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.less']
})
export class AccountComponent implements OnInit {

  listOfAccount: Account[] = [];

  newAccountModalIsVisible: boolean = false;

  constructor(
    private accountService: AccountService
  ) { }

  ngOnInit(): void {
    this.reloadListOfAccount();
  }

  reloadListOfAccount(): void {

    this.accountService.getListOfAccount().
      subscribe(listOfAccount => this.listOfAccount = [...listOfAccount]);

    console.log(this.listOfAccount);

  }

  onRefreshBalanceOf(id: number) {
    this.accountService.getBalanceOf(this.listOfAccount[id].address).
      subscribe(newBalanceOf => this.listOfAccount[id].balanceOf = newBalanceOf);
    // this.reloadListOfAccount();
  }

  onCreated(): void {
    this.reloadListOfAccount();
  }

}
