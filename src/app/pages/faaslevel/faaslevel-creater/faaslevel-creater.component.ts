import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';

import { FaaSLevel, FaaslevelService } from '../../../core/faaslevel/faaslevel.service'

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-faaslevel-creater',
  templateUrl: './faaslevel-creater.component.html',
  styleUrls: ['./faaslevel-creater.component.less']
})
export class FaaslevelCreaterComponent implements OnInit {

  createFaaSLevelForm!: FormGroup;
  drawerVisible: boolean = false;

  @Output() created = new EventEmitter<FaaSLevel>();
  
  constructor(
    private modal: NzModalService,
    private faaslevelService: FaaslevelService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createFaaSLevelForm = this.formBuilder.group({
      id: ['', [Validators.required]],
    });
  }

  resetForm(): void {

    this.createFaaSLevelForm.reset();

    for (const key in this.createFaaSLevelForm.controls) {
      this.createFaaSLevelForm.controls[key].markAsPristine();
      this.createFaaSLevelForm.controls[key].updateValueAndValidity();
    }

  }
  
  openDrawer(): void {
    this.resetForm();
    this.drawerVisible = true;
  }

  onCreated():void {
    this.modal.confirm({

      nzTitle: '<i>新建一个FaaSLevel？</i>',
      nzOnOk: () =>
        new Promise<void>((resolve, reject) => {

          let id: string = this.createFaaSLevelForm.get('id').value;

          this.faaslevelService.createFaaSLevel(id).
            subscribe(id => {
              this.created.emit(id);  // 向父组件发出 created 事件
            });
            console.log(id)

          resolve();
        })
          .finally(() => {
            for (const key in this.createFaaSLevelForm.controls) {
              this.createFaaSLevelForm.controls[key].markAsPristine();
              this.createFaaSLevelForm.controls[key].updateValueAndValidity();
            }
          })
          .catch(error => console.log(error))
      ,
      nzOnCancel: () => { },

    });
  }
  
  onCancled(): void {
    this.drawerVisible = false;
  }
}
