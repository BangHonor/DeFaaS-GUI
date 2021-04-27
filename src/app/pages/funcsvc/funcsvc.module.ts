import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FuncsvcRoutingModule } from './funcsvc-routing.module';
import { FuncsvcComponent } from './funcsvc.component';
import { FuncsvcCreaterComponent } from './funcsvc-creater/funcsvc-creater.component';

import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { NzSelectModule } from 'ng-zorro-antd/select';

const USED_NZ_MOUDLES = [
  NzTableModule,
  NzCardModule,
  NzGridModule,
  NzIconModule,
  NzModalModule,
  NzInputModule,
  NzFormModule,
  NzInputNumberModule,
  // NzSliderModule,
  NzSelectModule,
];

@NgModule({
  declarations: [
    FuncsvcComponent,
    FuncsvcCreaterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FuncsvcRoutingModule,
    ...USED_NZ_MOUDLES,
  ]
})
export class FuncsvcModule { }
