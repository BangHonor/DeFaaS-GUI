import { Component, OnInit } from '@angular/core';

import { Faaslevel, FaaslevelService } from '../../core/faaslevel/faaslevel.service'

// import { Router, ActivatedRoute, ParamMap } from '@angular/router';

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

    if (this.listOfFaaslevel == undefined) {

      this.isLoading = true;

      setTimeout(() => {
        this.isLoading = false;
        this.reloadListOfFaaslevel();
      }, 800);

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
