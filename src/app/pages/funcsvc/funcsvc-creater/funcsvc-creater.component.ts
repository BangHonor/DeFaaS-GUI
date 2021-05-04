import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { NzModalService } from 'ng-zorro-antd/modal';


import { Account, AccountService } from '../../../core/account/account.service'
import { Faaslevel, FaaslevelService } from '../../../core/faaslevel/faaslevel.service'
import { Funccode, FunccodeService } from '../../../core/funccode/funccode.service'
import { Funcsvc, FuncsvcService } from '../../../core/funcsvc/funcsvc.service'


@Component({
  selector: 'app-funcsvc-creater',
  templateUrl: './funcsvc-creater.component.html',
  styleUrls: ['./funcsvc-creater.component.less']
})
export class FuncsvcCreaterComponent implements OnInit {

  createFuncsvcForm!: FormGroup;

  formatterHour = (value: number) => `${value} 小时`;
  parserHour = (value: string) => value.replace(' 小时', '');
  formatterFaastoken = (value: number) => `${value} Token`;
  parserFaastoken = (value: string) => value.replace(' Token', '');


  constructor(
    private location: Location,
    private modal: NzModalService,
    private formBuilder: FormBuilder,
    private funcsvcService: FuncsvcService,
    private faaslevelService: FaaslevelService,
    private funccodeService: FunccodeService,
    private accountService: AccountService) { }

  ngOnInit(): void {
    // form definition
    this.createFuncsvcForm = this.formBuilder.group({
      accountAddress: ['', [Validators.required]],
      funccodeName: ['', [Validators.required]],
      faaslevelID: ['', [Validators.required]],
    });

    this.resetForm();
  }

  private resetForm(): void {

    this.createFuncsvcForm.reset();

    for (const key in this.createFuncsvcForm.controls) {
      this.createFuncsvcForm.controls[key].markAsPristine();
      this.createFuncsvcForm.controls[key].updateValueAndValidity();
    }

  }

  goBack(): void {

    this.modal.warning({
      nzTitle: '<i>是否离开页面？</i>',
      nzContent: '<b>离开页面后输入的信息将丢失</b>',
      nzOnOk: () => { this.location.back(); },
      nzOnCancel: () => { },
    });

  }

  onCreated(): void {

    this.modal.confirm({

      nzTitle: '<i>是否发起函数服务的部署请求？</i>',
      nzOnOk: () =>
        new Promise<void>((resolve, reject) => {

          console.log(this.createFuncsvcForm.getRawValue());

          // let funcsvc: Funcsvc;

          // TODO
          // let faaslevelID: string = this.createFuncsvcForm.get('faaslevelID').value;
          // funcsvc = ...;

          // TODO
          // this.funcsvcService.createFuncsvc(funcsvc);

          resolve();
        })
          .catch(error => console.log(error))
      ,
      nzOnCancel: () => { },

    });
  }


  loadListOfFaaslevelID(): string[] {

    let listOfID: string[];

    this.faaslevelService.getListOfFaaslevel().
      subscribe(listOfFaaslevel =>
        listOfID = listOfFaaslevel.map(faaslevel => faaslevel.id));

    return listOfID;
  }

  loadListOfFunccodeName(): string[] {

    let listOfName: string[];

    this.funccodeService.getListOfFunccode().
      subscribe(listOfFunccode =>
        listOfName = listOfFunccode.map(funccode => funccode.name));

    return listOfName;
  }

  loadListOfAccountAddress(): string[] {

    let listOfAddress: string[];

    this.accountService.getListOfAccount().
      subscribe(listOfAccount =>
        listOfAddress = listOfAccount.map(account => account.address));

    return listOfAddress;
  }



}
