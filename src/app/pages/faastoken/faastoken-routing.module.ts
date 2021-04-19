import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { FaastokenComponent } from './faastoken.component';

const routes: Routes = [
  { path: '', component: FaastokenComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FaastokenRoutingModule { }
