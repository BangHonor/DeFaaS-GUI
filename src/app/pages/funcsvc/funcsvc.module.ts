import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuncsvcRoutingModule } from './funcsvc-routing.module';
import { FuncsvcComponent } from './funcsvc.component';


@NgModule({
  declarations: [
    FuncsvcComponent
  ],
  imports: [
    CommonModule,
    FuncsvcRoutingModule
  ]
})
export class FuncsvcModule { }
