import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';

import { AccountCreaterComponent } from './account-creater/account-creater.component';
import { AccountDetailComponent } from './account-detail/account-detail.component';


import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzBadgeModule } from 'ng-zorro-antd/badge';

const USED_NZ_MOUDLES = [
  NzTableModule,
  NzCardModule,
  NzGridModule,
  NzIconModule,
  NzModalModule,
  NzInputModule,
  NzDescriptionsModule,
  NzBadgeModule,
];

@NgModule({
  declarations: [
    AccountComponent,
    AccountCreaterComponent,
    AccountDetailComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AccountRoutingModule,
    ...USED_NZ_MOUDLES
  ]
})
export class AccountModule { }
