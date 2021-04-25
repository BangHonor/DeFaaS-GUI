import { Component, OnInit } from '@angular/core';

import { FaaSLevel, FaaslevelService } from '../../core/faaslevel/faaslevel.service'


@Component({
  selector: 'app-faaslevel',
  templateUrl: './faaslevel.component.html',
  styleUrls: ['./faaslevel.component.less']
})

export class FaaslevelComponent implements OnInit {

  listOfFaaSLevel: FaaSLevel[];

  constructor() { }

  ngOnInit(): void {

  }

  onCreated(): void { }

}
