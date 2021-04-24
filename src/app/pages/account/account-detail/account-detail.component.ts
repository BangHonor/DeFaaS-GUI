import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

import { Account, AccountService } from '../../../core/account/account.service';

import { NzModalService } from 'ng-zorro-antd/modal';


@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.less']
})
export class AccountDetailComponent implements OnInit {

  @Input() account: Account;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private accountService: AccountService,
    private modal: NzModalService,
  ) { }

  ngOnInit(): void {
    this.reloadAccount();
  }

  reloadAccount(): void {
    const address = this.route.snapshot.paramMap.get("address");
    this.accountService.getAccount(address).
      subscribe(account => {
        this.account = account;
      });
  }

  goBack(): void {
    this.location.back();
  }

  onWitnessLogin(): void {

    this.modal.confirm({
      nzTitle: '<i>是否注册为证人？</i>',
      nzContent: '<b>注册证人将需要支付 0 押金</b>',
      nzOnOk: () =>
        new Promise<void>((resolve, reject) => {

          this.accountService.witnessLogin(this.account.address);
          resolve();

        }).catch(error => console.log(error)),
      nzOnCancel: () => { },
    });

    this.reloadAccount();
  }

  onWitnessLogout(): void {

    this.modal.confirm({
      nzTitle: '<i>是否注销证人资格？</i>',
      nzContent: '<b>注销证人资格将可以取回 0 押金</b>',
      nzOnOk: () =>
        new Promise<void>((resolve, reject) => {

          this.accountService.witnessLogout(this.account.address);
          resolve();

        }).catch(error => console.log(error)),
      nzOnCancel: () => { },
    });

    this.reloadAccount();
  }

  onProviderLogin(): void {

    this.modal.confirm({
      nzTitle: '<i>是否注册为供应商？</i>',
      nzContent: '<b>注册供应商将需要支付 0 押金</b>',
      nzOnOk: () =>
        new Promise<void>((resolve, reject) => {

          this.accountService.providerLogin(this.account.address);
          resolve();

        }).catch(error => console.log(error)),
      nzOnCancel: () => { },
    });

    this.reloadAccount();
  }

  onProviderLogout(): void {

    this.modal.confirm({
      nzTitle: '<i>是否注销供应商资格？</i>',
      nzContent: '<b>注销供应商资格将可以取回 0 押金</b>',
      nzOnOk: () =>
        new Promise<void>((resolve, reject) => {

          this.accountService.providerLogout(this.account.address);
          resolve();

        }).catch(error => console.log(error)),
      nzOnCancel: () => { },
    });

    this.reloadAccount();
  }

  onWitnessOnline(address: string): void {

    this.modal.confirm({
      nzTitle: '<i>是否将证人上线？</i>',
      nzOnOk: () =>
        new Promise<void>((resolve, reject) => {

          this.accountService.witnessOnline(this.account.address);
          resolve();

        }).catch(error => console.log(error)),
      nzOnCancel: () => { },
    });

    this.reloadAccount();
  }

  onWitnessOffline(address: string): void {

    this.modal.confirm({
      nzTitle: '<i>是否将证人下线？</i>',
      nzOnOk: () =>
        new Promise<void>((resolve, reject) => {

          this.accountService.witnessOffline(this.account.address);
          resolve();

        }).catch(error => console.log(error)),
      nzOnCancel: () => { },
    });

    this.reloadAccount();
  }

  onProviderOnline(address: string): void {

    this.modal.confirm({
      nzTitle: '<i>是否将供应商上线？</i>',
      nzOnOk: () =>
        new Promise<void>((resolve, reject) => {

          this.accountService.providerOnline(this.account.address);
          resolve();

        }).catch(error => console.log(error)),
      nzOnCancel: () => { },
    });

    this.reloadAccount();
  }

  onProviderOffline(address: string): void {

    this.modal.confirm({
      nzTitle: '<i>是否将供应商下线？</i>',
      nzOnOk: () =>
        new Promise<void>((resolve, reject) => {

          this.accountService.providerOffline(this.account.address);
          resolve();

        }).catch(error => console.log(error)),
      nzOnCancel: () => { },
    });

    this.reloadAccount();
  }
}
