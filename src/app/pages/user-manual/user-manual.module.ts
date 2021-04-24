import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManualRoutingModule } from './user-manual-routing.module';
import { UserManualComponent } from './user-manual.component';

import { MarkdownPipe } from '../../pipes/markdown/markdwon.pipe';

@NgModule({
  declarations: [
    UserManualComponent,
    MarkdownPipe,
  ],
  imports: [
    CommonModule,
    UserManualRoutingModule,
  ]
})
export class UserManualModule { }
