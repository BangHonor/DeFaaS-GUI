import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable, throwError, of } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { NzMessageService } from 'ng-zorro-antd/message';


import { WrapRes, ServiceErrorHandler } from '../wrap'

export interface Funccode {//Faaslevel API
  name: string,
  language: string,
  code: string,
}


@Injectable({
  providedIn: 'root'
})
export class FunccodeService extends ServiceErrorHandler {

  // name -> Funccode
  // name is a string
  funccodes: Map<string, Funccode>;

  constructor(
    private http: HttpClient,
    private message: NzMessageService,
  ) {

    super()
    this.loadFunccodeFromServe();
  }

  private loadFunccodeFromServe(): void {

    this.funccodes = new Map();

    let one: Funccode = {
      name: "funccode name",
      language: "typescript",
      code: "hello world!",
    };

    this.funccodes.set(one.name, one);

    this.message.success('加载函数代码数据成功');
  }

  getListOfFunccode(): Observable<Funccode[]> {
    return of([...this.funccodes.values()]);
  }

  getFunccode(name: string): Observable<Funccode> {

    if (!this.funccodes.has(name)) {
      this.message.error('函数代码不存在');
      return undefined;
    }

    let funccode: Funccode = this.funccodes.get(name);

    return of(funccode);
  }
}
