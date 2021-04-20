import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FunccodeRoutingModule } from './funccode-routing.module';
import { FunccodeComponent } from './funccode.component';


@NgModule({
  declarations: [
    FunccodeComponent
  ],
  imports: [
    CommonModule,
    FunccodeRoutingModule
  ]
})
export class FunccodeModule { }
