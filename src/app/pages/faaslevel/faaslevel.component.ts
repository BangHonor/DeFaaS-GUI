import { Component, OnInit } from '@angular/core';

import { FaaSLevel, FaaslevelService } from '../../core/faaslevel/faaslevel.service'


@Component({
  selector: 'app-faaslevel',
  templateUrl: './faaslevel.component.html',
  styleUrls: ['./faaslevel.component.less']
})

export class FaaslevelComponent implements OnInit {

  listOfFaaSLevel: FaaSLevel[];

  constructor(private faaslevelService:FaaslevelService) { }

  ngOnInit(): void {
    this.reloadListOfFaaSLevel();
  }

  reloadListOfFaaSLevel(): void {

    this.faaslevelService.getListOfFaaSLevel().
      subscribe(ListOfFaaSLevel => this.listOfFaaSLevel = [...ListOfFaaSLevel]);

    console.log(this.listOfFaaSLevel);
  }

  onCreated(): void {
    this.reloadListOfFaaSLevel();
  }
}
