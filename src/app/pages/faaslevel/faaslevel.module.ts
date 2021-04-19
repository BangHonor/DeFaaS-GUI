import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FaaslevelRoutingModule } from './faaslevel-routing.module';
import { FaaslevelComponent } from './faaslevel.component';


import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';

const USED_NZ_MOUDLES = [
  NzTableModule,
  NzCardModule,
  NzGridModule,
];


@NgModule({
  declarations: [
    FaaslevelComponent
  ],
  imports: [
    CommonModule,
    FaaslevelRoutingModule,
    ...USED_NZ_MOUDLES,
  ]
})
export class FaaslevelModule { }
