import { Component, OnInit } from '@angular/core';

import { FaaSLevel, FaaslevelService } from '../../core/faaslevel/faaslevel.service'


@Component({
  selector: 'app-faaslevel',
  templateUrl: './faaslevel.component.html',
  styleUrls: ['./faaslevel.component.less']
})

export class FaaslevelComponent implements OnInit {

  listOfData: FaaSLevel[] = [
    {
      id: '0',
      cpu: '1',
      mem: '512',
    },
    {
      id: '1',
      cpu: '1',
      mem: '1024',
    },
    {
      id: '2',
      cpu: '2',
      mem: '2048',
    },
  ];

  constructor() { }



  ngOnInit(): void {
  }

}
