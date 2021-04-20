import { Component, OnInit } from '@angular/core';

import { Account, AccountService } from '../../core/account/account.service'

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.less']
})
export class AccountComponent implements OnInit {

  listOfAccount: Account[] = [];

  constructor(
    private accountService: AccountService
  ) { }

  ngOnInit(): void {
    this.loadData()
  }

  loadData(): void {

    this.accountService.getListOfAccount().
      subscribe(listOfAccount => this.listOfAccount = listOfAccount);

  }

  refreshBalanceOf(i: number) {
    this.accountService.getBalanceOf(this.listOfAccount[i].address).subscribe(
      newBalanceOf => this.listOfAccount[i].balanceOf = newBalanceOf);
  }
}
