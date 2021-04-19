import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FaastokenRoutingModule } from './faastoken-routing.module';
import { FaastokenComponent } from './faastoken.component';


@NgModule({
  declarations: [
    FaastokenComponent
  ],
  imports: [
    CommonModule,
    FaastokenRoutingModule
  ]
})
export class FaastokenModule { }
