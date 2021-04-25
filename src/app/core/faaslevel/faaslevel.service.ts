import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable, throwError, of } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { NzMessageService } from 'ng-zorro-antd/message';


import { WrapRes, ServiceErrorHandler } from '../wrap'
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

export interface FaaSLevel {//FaaSLevel API
  id: string;
  cpu: string;
  mem: string;
}

@Injectable({
  providedIn: 'root'
})
export class FaaslevelService extends ServiceErrorHandler {

  faaslevels: Map<string, FaaSLevel>;

  constructor(private http: HttpClient,
    private message: NzMessageService) {

    super()
    this.loadFaasLevelsFromServer();
  }

  private loadFaasLevelsFromServer(): void {

    this.faaslevels =new Map();

    let one: FaaSLevel = {
      id: "0",
      cpu: "1",
      mem: "512",
    };
    this.faaslevels.set(one.id, one);

    this.message.success('加载FaaSLevel数据成功');
  }

  getListOfFaaSLevel(): Observable<FaaSLevel[]> {
    return of([...this.faaslevels.values()]);
  }

  createFaaSLevel(id:string): Observable<FaaSLevel> {

    // get a new account from server
    let faaslevel: FaaSLevel = {
      id: id,
      cpu: "1",
      mem: "512",
    };
    this.faaslevels.set(faaslevel.id, faaslevel);
    
    this.message.success('新建账户成功');

    return of(faaslevel);
  }

  getFaaSLevel(id: string): Observable<FaaSLevel> {

    if (!this.faaslevels.has(id)) {
      this.message.error('faaslevel不存在');
      return undefined;
    }

    return of(this.faaslevels.get(id));
  }
}



