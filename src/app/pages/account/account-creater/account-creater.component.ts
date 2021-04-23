import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';

import { Account, AccountService } from '../../../core/account/account.service'


@Component({
  selector: 'app-account-creater',
  templateUrl: './account-creater.component.html',
  styleUrls: ['./account-creater.component.less']
})
export class AccountCreaterComponent implements OnInit {

  passwordVisible: boolean = false;
  password?: string;

  @Output() created = new EventEmitter<Account>();

  constructor(
    private modal: NzModalService,
    private accountService: AccountService) { }

  ngOnInit(): void {
  }

  showCreateConfirm(): void {
    this.modal.confirm({
      nzTitle: '<i>新建一个本地账户？</i>',
      nzContent: '<b>新账户的密码将是当前密码框中的密码</b>',
      nzOnOk: () =>
        new Promise<void>((resolve, reject) => {
          this.createAccount();
          resolve();
        }).catch(error => console.log(error)),
      nzOnCancel: () => { },
    });
  }

  createAccount(): void {

    this.accountService.createAccount(this.password).
      subscribe(account => {
        this.created.emit(account);  // 向父组件发出 created 事件
      });

  }
}
