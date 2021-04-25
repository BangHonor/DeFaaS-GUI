import { Component, OnInit } from '@angular/core';

import { Faaslevel, FaaslevelService } from '../../core/faaslevel/faaslevel.service'


@Component({
  selector: 'app-faaslevel',
  templateUrl: './faaslevel.component.html',
  styleUrls: ['./faaslevel.component.less']
})

export class FaaslevelComponent implements OnInit {

  listOfFaaslevel: Faaslevel[];

  constructor(
    private faaslevelService: FaaslevelService,
  ) { }

  ngOnInit(): void {
    this.reloadListOfFaaslevel();

    console.log(this.listOfFaaslevel);
  }

  reloadListOfFaaslevel(): void {

    this.faaslevelService.getListOfFaaslevel().
      subscribe(listOfFaaslevel => this.listOfFaaslevel = [...listOfFaaslevel]);

  }

  onCreated(): void {
    this.reloadListOfFaaslevel();
  }
}
