import { Component, OnInit } from '@angular/core';

import { Funccode, FunccodeService } from '../../core/funccode/funccode.service'

import { NzModalService } from 'ng-zorro-antd/modal';


@Component({
  selector: 'app-funccode',
  templateUrl: './funccode.component.html',
  styleUrls: ['./funccode.component.less']
})
export class FunccodeComponent implements OnInit {

  listOfFunccode: Funccode[];
  constructor(
    private funccodeService: FunccodeService,
    private modal: NzModalService,
  ) { }

  ngOnInit(): void {
    this.reloadListOfFunccode();
  }

  reloadListOfFunccode(): void {

    this.funccodeService.getListOfFunccode().
      subscribe(listOfFunccode => this.listOfFunccode = [...listOfFunccode]);

  }

  onDeleted(name: string) {

    this.modal.warning({

      nzTitle: `<i>是否删除函数代码 ${name} ？</i>`,
      nzContent: '<b>删除后将不可恢复</b>',
      nzOnOk: () =>
        new Promise<void>((resolve, reject) => {

          // TODO
          // this.funccodeService.deleteFunccode()
          // this.reloadListOfFunccode()

          resolve();

        }).catch(error => console.log(error))
      ,
      nzOnCancel: () => { },

    });
  }
}
