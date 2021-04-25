import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';

import { Account, AccountService } from '../../../core/account/account.service'

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-account-creater',
  templateUrl: './account-creater.component.html',
  styleUrls: ['./account-creater.component.less']
})
export class AccountCreaterComponent implements OnInit {

  passwordVisible: boolean = false;
  drawerVisible: boolean = false;
  createAccountForm!: FormGroup;

  @Output() created = new EventEmitter<Account>();

  constructor(
    private modal: NzModalService,
    private accountService: AccountService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.createAccountForm = this.formBuilder.group({
      password: [null, [Validators.required]],
    });

  }

  resetForm(): void {

    this.createAccountForm.reset();

    for (const key in this.createAccountForm.controls) {
      this.createAccountForm.controls[key].markAsPristine();
      this.createAccountForm.controls[key].updateValueAndValidity();
    }

  }

  openDrawer(): void {
    this.resetForm();
    this.drawerVisible = true;
  }

  onCreated(): void {



    this.modal.confirm({

      nzTitle: '<i>新建一个本地账户？</i>',
      nzContent: '<b>新账户的密码将是当前密码框中的密码</b>',
      nzOnOk: () =>
        new Promise<void>((resolve, reject) => {

          let password: string = this.createAccountForm.get('password').value;

          this.accountService.createAccount(password).
            subscribe(account => {
              this.created.emit(account);  // 向父组件发出 created 事件
            });

          resolve();
        })
          .finally(() => {
            for (const key in this.createAccountForm.controls) {
              this.createAccountForm.controls[key].markAsPristine();
              this.createAccountForm.controls[key].updateValueAndValidity();
            }
            this.drawerVisible = false;
          })
          .catch(error => console.log(error))
      ,
      nzOnCancel: () => { },

    });
  }

  onCancled(): void {
    this.drawerVisible = false;
  }

}
