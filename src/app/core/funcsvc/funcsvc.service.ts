import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable, throwError, of } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { NzMessageService } from 'ng-zorro-antd/message';


import { WrapRes, ServiceErrorHandler } from '../wrap'

export interface Funcsvc {
  name: string,
  accountAddress: string,
  funccodeName: string,
  faaslevelID: string,
  serviceDuration: string,
  highestUnitPrice: string,
  unitPrice: string,
  serviceFee: string,
  deploymentOrderID: string,
  deploymentOrderState: string,
}

@Injectable({
  providedIn: 'root'
})

export class FuncsvcService extends ServiceErrorHandler {

  funcsvcs: Map<string, Funcsvc>;

  constructor(
    private http: HttpClient,
    private message: NzMessageService,
  ) {

    super()
    this.loadFuncsvcFromServe();
  }

  private loadFuncsvcFromServe(): void {

    this.funcsvcs = new Map();

    let one: Funcsvc = {
      name: "test-service-1",
      accountAddress: "0x00000000",
      funccodeName: "hello-go",
      faaslevelID: "0",
      serviceDuration: "24",
      highestUnitPrice: "",
      unitPrice: "10",
      serviceFee: "240",
      deploymentOrderID: "0",
      deploymentOrderState: "Bidding",
    };

    let two: Funcsvc = {
      name: "test-service-2",
      accountAddress: "0x00000000",
      funccodeName: "hello-ts",
      faaslevelID: "1",
      serviceDuration: "36",
      highestUnitPrice: "",
      unitPrice: "10",
      serviceFee: "240",
      deploymentOrderID: "1",
      deploymentOrderState: "Confirming",
    };


    this.funcsvcs.set(one.name, one);
    this.funcsvcs.set(two.name, two);


    this.message.success('加载funccode数据成功');
  }

  getListOfFuncsvc(): Observable<Funcsvc[]> {
    return of([...this.funcsvcs.values()]);
  }
}
