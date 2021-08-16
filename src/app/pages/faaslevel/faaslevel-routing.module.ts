import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaaslevelCreaterComponent } from './faaslevel-creater/faaslevel-creater.component';


import { FaaslevelComponent } from './faaslevel.component'

const routes: Routes = [
  { path: '', component: FaaslevelComponent },
  { path: 'create', component: FaaslevelCreaterComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FaaslevelRoutingModule { }
