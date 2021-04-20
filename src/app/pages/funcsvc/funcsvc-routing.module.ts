import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { FuncsvcComponent } from './funcsvc.component';

const routes: Routes = [
  { path: '', component: FuncsvcComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuncsvcRoutingModule { }
