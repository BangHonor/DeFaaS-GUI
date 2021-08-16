import { Component, OnInit } from '@angular/core';

import { Account, AccountService } from '../../core/account/account.service'

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.less']
})
export class AccountComponent implements OnInit {

  isLoading: boolean;
  listOfAccount: Account[];


  constructor(
    private accountService: AccountService
  ) { }

  ngOnInit(): void {

    // 不是异步等待后端数据
    // 仅是延时加载数据
    if (this.listOfAccount == undefined) {

      this.isLoading = true;

      setTimeout(() => {
        this.isLoading = false;
        this.reloadListOfAccount();

      }, 1000);

    }
  }

  reloadListOfAccount(): void {

    this.accountService.getListOfAccount().
      subscribe(listOfAccount => this.listOfAccount = [...listOfAccount]);

  }

  onRefreshBalanceOf(id: number) {
    this.accountService.getBalanceOf(this.listOfAccount[id].address).
      subscribe(newBalanceOf => this.listOfAccount[id].balanceOf = newBalanceOf);
  }

  onCreated(): void {
    this.reloadListOfAccount();
  }

}
