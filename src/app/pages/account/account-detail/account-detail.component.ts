import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

import { Account, AccountService } from '../../../core/account/account.service'


@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.less']
})
export class AccountDetailComponent implements OnInit {

  @Input() account: Account;

  constructor(
    private route: ActivatedRoute,
    private accountService: AccountService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getAccount()
  }

  getAccount(): void {
    const address = +this.route.snapshot.paramMap.get("address");
    this.accountService.getListOfAccount().
      subscribe(listOfAccount => this.account = listOfAccount[0]);
  }

  goBack() {
    this.location.back();
  }

}
