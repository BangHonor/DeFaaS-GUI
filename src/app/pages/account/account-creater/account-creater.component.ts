import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzMessageService } from 'ng-zorro-antd/message';

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
    private message: NzMessageService,
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
        }).then(
          _ => this.message.success('新建本地账户成功'),
          _ => this.message.info('新建本地账户失败')
        ),
      nzOnCancel: () => this.message.info('取消新建本地账户'),
    });
  }

  createAccount(): void {

    this.accountService.createAccount(this.password).
      subscribe(account => {
        this.created.emit(account);  // 向父组件发出 created 事件
      });

  }
}
