import { Component, OnInit } from '@angular/core';
import { Funcsvc,FuncsvcService } from '../../core/funcsvc/funcsvc.service'

@Component({
  selector: 'app-funcsvc',
  templateUrl: './funcsvc.component.html',
  styleUrls: ['./funcsvc.component.less']
})
export class FuncsvcComponent implements OnInit {

  listOfFuncsvc: Funcsvc[];
  constructor(
    private funcsvcService: FuncsvcService, 
  ) { }

  ngOnInit(): void {
    this.reloadListOfFuncsvc();
  }

  reloadListOfFuncsvc(): void {

    this.funcsvcService.getListOfFuncsvc().
      subscribe(listOfFuncsvc => this.listOfFuncsvc = [...listOfFuncsvc]);

  }
}
