import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Location } from "@angular/common";
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { NzModalService } from 'ng-zorro-antd/modal';

import { Faaslevel, FaaslevelService } from '../../../core/faaslevel/faaslevel.service'


@Component({
  selector: 'app-faaslevel-creater',
  templateUrl: './faaslevel-creater.component.html',
  styleUrls: ['./faaslevel-creater.component.less']
})
export class FaaslevelCreaterComponent implements OnInit {

  createFaaslevelForm!: FormGroup;
  isResult: boolean;

  formatterMB = (value: number) => `${value} MB`;
  parserMB = (value: string) => value.replace(' MB', '');


  constructor(
    private location: Location,
    private modal: NzModalService,
    private faaslevelService: FaaslevelService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.isResult = false;
    this.createFaaslevelForm = this.formBuilder.group({
      cpu: ['', [Validators.required]],
      mem: ['', [Validators.required]],
    });
  }

  private resetForm(): void {

    this.createFaaslevelForm.reset();

    for (const key in this.createFaaslevelForm.controls) {
      this.createFaaslevelForm.controls[key].markAsPristine();
      this.createFaaslevelForm.controls[key].updateValueAndValidity();
    }

  }

  goBack(): void {
    this.location.back();
  }

  cancle(): void {

    this.modal.warning({
      nzTitle: '<i>是否离开页面？</i>',
      nzContent: '<b>离开页面后输入的信息将丢失</b>',
      nzOnOk: _ => { this.goBack() },
      nzOnCancel: _ => { },
    });

  }

  onCreated(): void {
    this.modal.confirm({

      nzTitle: '<i>新建一个FaaS 规格？</i>',
      nzOnOk: () =>
        new Promise<void>((resolve, reject) => {

          let cpu: string = this.createFaaslevelForm.get('cpu').value;
          let mem: string = this.createFaaslevelForm.get('mem').value;

          this.faaslevelService.addFaaslevel({ "cpu": cpu, "mem": mem } as Faaslevel)
            .subscribe(
              _ => {
                this.isResult = true;
              });

          resolve();
        })
          .catch(error => console.log(error))
      ,
      nzOnCancel: _ => { },

    });
  }

}
