import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { FuncsvcComponent } from './funcsvc.component';
import { FuncsvcCreaterComponent } from './funcsvc-creater/funcsvc-creater.component'

const routes: Routes = [
  { path: '', component: FuncsvcComponent },
  { path: 'create', component: FuncsvcCreaterComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuncsvcRoutingModule { }
