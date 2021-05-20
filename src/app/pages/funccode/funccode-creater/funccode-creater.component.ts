import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { NzModalService } from 'ng-zorro-antd/modal';


import { Funccode, FunccodeService } from '../../../core/funccode/funccode.service'


@Component({
  selector: 'app-funccode-creater',
  templateUrl: './funccode-creater.component.html',
  styleUrls: ['./funccode-creater.component.less']
})
export class FunccodeCreaterComponent implements OnInit {

  createFunccodeForm!: FormGroup;
  isResult: boolean;


  constructor(
    private location: Location,
    private modal: NzModalService,
    private funccodeService: FunccodeService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.isResult = false;
    this.createFunccodeForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      tag: ['0', [Validators.required]],
      filename: ['0', [Validators.required]],
      language: ['0', [Validators.required]],
      code: ['0', [Validators.required]],
    });
  }

  private resetForm(): void {

    this.createFunccodeForm.reset();

    for (const key in this.createFunccodeForm.controls) {
      this.createFunccodeForm.controls[key].markAsPristine();
      this.createFunccodeForm.controls[key].updateValueAndValidity();
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

      nzTitle: '<i>新建一个函数？</i>',
      nzOnOk: () =>
        new Promise<void>((resolve, reject) => {

          let name: string = this.createFunccodeForm.get('name').value as string;
          let tag: string = this.createFunccodeForm.get('tag').value as string;
          let filename: string = this.createFunccodeForm.get('filename').value as string;
          let language: string = this.createFunccodeForm.get('language').value as string;
          let code: string = this.createFunccodeForm.get('code').value as string;

          
          this.funccodeService.addFunccode({ "name": name,"tag":tag,"files":[{"filename":filename,"language":language,"code":code}]} as Funccode)
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


  get cpu() { return this.createFunccodeForm.get('cpu'); }

  get mem() { return this.createFunccodeForm.get('mem'); }
}
