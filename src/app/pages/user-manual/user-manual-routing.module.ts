import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { UserManualComponent } from './user-manual.component';

const routes: Routes = [
  { path: '', component: UserManualComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserManualRoutingModule { }
