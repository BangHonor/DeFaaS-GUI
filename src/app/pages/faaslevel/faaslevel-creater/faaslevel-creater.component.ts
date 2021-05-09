import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';

import { Faaslevel, FaaslevelService } from '../../../core/faaslevel/faaslevel.service'

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-faaslevel-creater',
  templateUrl: './faaslevel-creater.component.html',
  styleUrls: ['./faaslevel-creater.component.less']
})
export class FaaslevelCreaterComponent implements OnInit {

  createFaaslevelForm!: FormGroup;
  drawerVisible: boolean = false;

  @Output() created = new EventEmitter<void>();

  constructor(
    private modal: NzModalService,
    private faaslevelService: FaaslevelService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createFaaslevelForm = this.formBuilder.group({
      cpu: ['', [Validators.required]],
      mem: ['', [Validators.required]],
    });
  }

  resetForm(): void {

    this.createFaaslevelForm.reset();

    for (const key in this.createFaaslevelForm.controls) {
      this.createFaaslevelForm.controls[key].markAsPristine();
      this.createFaaslevelForm.controls[key].updateValueAndValidity();
    }

  }

  openDrawer(): void {
    this.resetForm();
    this.drawerVisible = true;
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
                this.created.emit();  // 向父组件发出 created 事件
              });

          resolve();
        })
          .catch(error => console.log(error))
      ,
      nzOnCancel: _ => { },

    });
  }

  onCancled(): void {
    this.drawerVisible = false;
  }

}
