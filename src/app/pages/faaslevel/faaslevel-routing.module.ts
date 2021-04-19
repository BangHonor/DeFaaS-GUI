import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { FaaslevelComponent } from './faaslevel.component'

const routes: Routes = [
  { path: '', component: FaaslevelComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FaaslevelRoutingModule { }
