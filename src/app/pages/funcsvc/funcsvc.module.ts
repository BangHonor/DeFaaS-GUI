import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuncsvcRoutingModule } from './funcsvc-routing.module';
import { FuncsvcComponent } from './funcsvc.component';

// https://ng.ant.design/experimental/code-editor/zh
import { NzCodeEditorModule } from 'ng-zorro-antd/code-editor';
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
];

@NgModule({
  declarations: [
    FuncsvcComponent
  ],
  imports: [
    CommonModule,
    FuncsvcRoutingModule,
    ...USED_NZ_MOUDLES,
  ]
})
export class FuncsvcModule { }
