import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccountComponent } from './account.component'
import { AccountDetailComponent } from './account-detail/account-detail.component';

const routes: Routes = [
  { path: '', component: AccountComponent },
  { path: 'detail/:address', component: AccountDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
