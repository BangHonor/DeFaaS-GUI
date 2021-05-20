import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FunccodeComponent } from './funccode.component'
import { EditorComponent } from './editor/editor.component'
import {FunccodeCreaterComponent} from './funccode-creater/funccode-creater.component'

const routes: Routes = [
  { path: '', component: FunccodeComponent },
  { path: 'create', component: FunccodeCreaterComponent },
  { path: 'editor/:name', component: EditorComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FunccodeRoutingModule { }
