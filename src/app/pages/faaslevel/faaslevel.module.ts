import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { FaaslevelRoutingModule } from './faaslevel-routing.module';
import { FaaslevelComponent } from './faaslevel.component';

import { FaaslevelCreaterComponent } from './faaslevel-creater/faaslevel-creater.component';


import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { NzButtonModule } from 'ng-zorro-antd/button';

const USED_NZ_MOUDLES = [
  NzTableModule,
  NzCardModule,
  NzGridModule,
  NzIconModule,
  NzModalModule,
  NzInputModule,
  NzDrawerModule,
  NzFormModule,
  NzInputNumberModule,
  NzSliderModule,
  NzButtonModule,
];


@NgModule({
  declarations: [
    FaaslevelComponent,
    FaaslevelCreaterComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FaaslevelRoutingModule,
    ...USED_NZ_MOUDLES,
  ]
})
export class FaaslevelModule { }
