import { Component, OnInit } from '@angular/core';

import { Funccode, FunccodeService } from '../../core/funccode/funccode.service'

import { NzModalService } from 'ng-zorro-antd/modal';


@Component({
  selector: 'app-funccode',
  templateUrl: './funccode.component.html',
  styleUrls: ['./funccode.component.less']
})
export class FunccodeComponent implements OnInit {
  isLoading: boolean;
  listOfFunccode: Funccode[];
  constructor(
    private funccodeService: FunccodeService,
    private modal: NzModalService,
  ) { }

  ngOnInit(): void {
    
    if (this.listOfFunccode == undefined) {
      
      this.isLoading = true;

      setTimeout(() => {
        this.isLoading = false;
        this.reloadListOfFunccode();
      }, 1000);

    }

  }

  reloadListOfFunccode(): void {

    this.funccodeService.getListOfFunccode().
      subscribe(listOfFunccode => this.listOfFunccode = [...listOfFunccode]);
      console.log("listofFunccode:",this.listOfFunccode)

  }

  onCreated(): void {
    this.reloadListOfFunccode();
  }

  onDeleted(funccode: Funccode) {

    this.modal.warning({

      nzTitle: `<i>是否删除函数代码 ${funccode.name} ？</i>`,
      nzContent: '<b>删除后将不可恢复</b>',
      nzOnOk: () =>
        new Promise<void>((resolve, reject) => {

          this.funccodeService.deleteFunccode(funccode)
          this.reloadListOfFunccode()

          resolve();

        }).catch(error => console.log(error))
      ,
      nzOnCancel: () => { },

    });
  }
}
