import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable, throwError, of } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { NzMessageService } from 'ng-zorro-antd/message';


import { WrapRes, ServiceErrorHandler } from '../wrap'
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

export interface Faaslevel {//Faaslevel API
  id: string;
  cpu: string;
  mem: string;
}

@Injectable({
  providedIn: 'root'
})
export class FaaslevelService extends ServiceErrorHandler {

  // id -> Faaslevel
  // id is a string
  faaslevels: Map<string, Faaslevel>;

  constructor(
    private http: HttpClient,
    private message: NzMessageService,
  ) {

    super()
    this.loadFaaslevelsFromServe();
  }

  private loadFaaslevelsFromServe(): void {

    this.faaslevels = new Map();

    let one: Faaslevel = {
      id: "0",
      cpu: "1",
      mem: "512",
    };
    this.faaslevels.set(one.id, one);

    this.message.success('加载FaaS规格数据成功');
  }

  getListOfFaaslevel(): Observable<Faaslevel[]> {
    return of([...this.faaslevels.values()]);
  }

  createFaaslevel(cpu: string, mem: string): Observable<Faaslevel> {

    // get a new account from server
    let faaslevel: Faaslevel = {
      id: "" + this.faaslevels.size,
      cpu: cpu,
      mem: mem,
    };

    this.faaslevels.set(faaslevel.id, faaslevel);

    this.message.success('新建FaaS规格成功');

    return of(faaslevel);
  }

  getFaaslevel(id: string): Observable<Faaslevel> {

    if (!this.faaslevels.has(id)) {
      this.message.error('FaaS 规格不存在');
      return undefined;
    }

    return of(this.faaslevels.get(id));
  }
}



