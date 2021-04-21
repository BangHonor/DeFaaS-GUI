import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzMessageService } from 'ng-zorro-antd/message';

import { FaaSLevel, FaaslevelService } from '../../../core/faaslevel/faaslevel.service'


@Component({
  selector: 'app-faaslevel-creater',
  templateUrl: './faaslevel-creater.component.html',
  styleUrls: ['./faaslevel-creater.component.less']
})
export class FaaslevelCreaterComponent implements OnInit {

  @Output() created = new EventEmitter<FaaSLevel>();

  constructor(
    private modal: NzModalService,
    private message: NzMessageService,
    private fasslevelService: FaaslevelService) { }

  ngOnInit(): void {
  }

  createFaasLevel(): void {
      
  }

}
