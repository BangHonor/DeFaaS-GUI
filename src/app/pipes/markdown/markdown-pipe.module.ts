import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MarkdownPipe } from './markdwon.pipe'


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    MarkdownPipe,
  ],
  exports: [
    MarkdownPipe,
  ]
})
export class MarkdownPipeModule { }
