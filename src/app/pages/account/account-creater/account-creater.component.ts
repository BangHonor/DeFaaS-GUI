import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Location } from "@angular/common";
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
  isResult: boolean;
  createAccountForm!: FormGroup;

  constructor(
    private location: Location,
    private modal: NzModalService,
    private accountService: AccountService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.isResult = false;
    this.createAccountForm = this.formBuilder.group({
      password: [null, [Validators.required]],
    });
  }

  private resetForm(): void {

    this.createAccountForm.reset();

    for (const key in this.createAccountForm.controls) {
      this.createAccountForm.controls[key].markAsPristine();
      this.createAccountForm.controls[key].updateValueAndValidity();
    }

  }

  goBack(): void {
    this.location.back();
  }

  cancle(): void {

    this.modal.warning({
      nzTitle: '<i>是否离开页面？</i>',
      nzContent: '<b>离开页面后输入的信息将丢失</b>',
      nzOnOk: _ => { this.goBack() },
      nzOnCancel: _ => { },
    });

  }

  onCreated(): void {

    this.modal.confirm({

      nzTitle: '<i>新建一个本地账户？</i>',
      nzContent: '<b>新账户的密码将是当前密码框中的密码</b>',
      nzOnOk: _ =>
        new Promise<void>((resolve, reject) => {

          let password: string = this.createAccountForm.get('password').value as string;

          this.accountService.createAccount(password).
            subscribe(
              _ => {
                this.isResult = true;
              });

          resolve();
        })
          .catch(error => console.log(error))
      ,
      nzOnCancel: _ => { },

    });
  }
}
