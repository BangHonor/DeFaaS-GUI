import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { FaaSLevel, FaaslevelService } from '../../../core/faaslevel/faaslevel.service'


@Component({
  selector: 'app-faaslevel-creater',
  templateUrl: './faaslevel-creater.component.html',
  styleUrls: ['./faaslevel-creater.component.less']
})
export class FaaslevelCreaterComponent implements OnInit {

  @Output() created = new EventEmitter<FaaSLevel>();


  constructor() { }

  ngOnInit(): void {
  }

}
