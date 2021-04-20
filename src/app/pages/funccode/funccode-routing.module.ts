import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FunccodeComponent } from './funccode.component'

const routes: Routes = [
  { path: '', component: FunccodeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FunccodeRoutingModule { }
