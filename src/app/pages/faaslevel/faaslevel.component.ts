import { Component, OnInit } from '@angular/core';

import { Faaslevel, FaaslevelService } from '../../core/faaslevel/faaslevel.service'


@Component({
  selector: 'app-faaslevel',
  templateUrl: './faaslevel.component.html',
  styleUrls: ['./faaslevel.component.less']
})

export class FaaslevelComponent implements OnInit {

  isLoading: boolean;
  listOfFaaslevel: Faaslevel[];

  constructor(
    private faaslevelService: FaaslevelService,
  ) { }

  ngOnInit(): void {

    // 不是异步等待后端数据
    // 仅是延时加载数据
    if (this.listOfFaaslevel == undefined) {

      this.isLoading = true;

      setTimeout(() => {
        this.isLoading = false;
        this.reloadListOfFaaslevel();
      }, 1000);

    }

  }

  reloadListOfFaaslevel(): void {

    this.faaslevelService.getListOfFaaslevel().
      subscribe(listOfFaaslevel => this.listOfFaaslevel = [...listOfFaaslevel]);

  }

  onCreated(): void {
    this.reloadListOfFaaslevel();
  }
}
