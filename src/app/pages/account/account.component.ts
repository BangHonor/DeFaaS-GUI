import { Component, OnInit } from '@angular/core';

import { Account, AccountService } from '../../core/account/account.service'

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.less']
})
export class AccountComponent implements OnInit {

  listOfData: Account[] = [
    {
      address: "0x01",
      password: "123456",
      balanceOf: "1",
    },
    {
      address: "0x02",
      password: "123456",
      balanceOf: "2",
    },
    {
      address: "0x03",
      password: "123456",
      balanceOf: "3",
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
