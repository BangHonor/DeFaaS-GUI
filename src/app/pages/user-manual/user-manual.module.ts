import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManualRoutingModule } from './user-manual-routing.module';
import { UserManualComponent } from './user-manual.component';

import { MarkdownPipeModule } from '../../pipes/markdown/markdown-pipe.module';

@NgModule({
  declarations: [
    UserManualComponent,
  ],
  imports: [
    CommonModule,
    UserManualRoutingModule,
    MarkdownPipeModule,
  ]
})
export class UserManualModule { }
