import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FunccodeRoutingModule } from './funccode-routing.module';
import { FunccodeComponent } from './funccode.component';
import { EditorComponent } from './editor/editor.component';

import { NzCodeEditorModule } from 'ng-zorro-antd/code-editor';

const USED_NZ_MOUDLES = [
  NzCodeEditorModule
];


@NgModule({
  declarations: [
    FunccodeComponent,
    EditorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FunccodeRoutingModule,
    ...USED_NZ_MOUDLES,
  ]
})
export class FunccodeModule { }
