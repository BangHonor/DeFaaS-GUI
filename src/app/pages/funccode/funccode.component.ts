import { Component, OnInit } from '@angular/core';

import { Funccode,FunccodeService } from '../../core/funccode/funccode.service'
@Component({
  selector: 'app-funccode',
  templateUrl: './funccode.component.html',
  styleUrls: ['./funccode.component.less']
})
export class FunccodeComponent implements OnInit {
  listOfFunccode: Funccode[];
  constructor(
    private funccodeService: FunccodeService, 
  ) { }

  ngOnInit(): void {
    this.reloadListOfFunccode();
  }

  reloadListOfFunccode(): void {

    this.funccodeService.getListOfFunccode().
      subscribe(listOfFunccode => this.listOfFunccode = [...listOfFunccode]);

  }
}
