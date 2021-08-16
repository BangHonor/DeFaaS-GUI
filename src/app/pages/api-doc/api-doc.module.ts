import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiDocRoutingModule } from './api-doc-routing.module';
import { ApiDocComponent } from './api-doc.component';

import { MarkdownPipeModule } from '../../pipes/markdown/markdown-pipe.module';


@NgModule({
  declarations: [
    ApiDocComponent,
  ],
  imports: [
    CommonModule,
    ApiDocRoutingModule,
    MarkdownPipeModule,
  ]
})
export class ApiDocModule { }
