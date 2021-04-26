import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable, throwError, of } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { NzMessageService } from 'ng-zorro-antd/message';


import { WrapRes, ServiceErrorHandler } from '../wrap'
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

export interface Funcsvc{
  name: string,
  language: string,
}

@Injectable({
  providedIn: 'root'
})

export class FuncsvcService extends ServiceErrorHandler {

  funcsvcs:Map<string,Funcsvc>;

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
      name: "funccode name",
      language: "funccode language"
    };
    this.funcsvcs.set(one.name, one);

    this.message.success('加载funccode数据成功');
  }

  getListOfFuncsvc(): Observable<Funcsvc[]> {
    return of([...this.funcsvcs.values()]);
  }
}
