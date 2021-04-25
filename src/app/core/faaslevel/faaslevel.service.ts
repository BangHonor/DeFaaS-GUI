import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable, throwError, of } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { NzMessageService } from 'ng-zorro-antd/message';


import { WrapRes, ServiceErrorHandler } from '../wrap'

export interface FaaSLevel {//FaaSLevel API
  id: string;
  cpu: string;
  mem: string;
}

export interface ListData {
  levels: FaaSLevel[]
}


@Injectable({
  providedIn: 'root'
})
export class FaaslevelService extends ServiceErrorHandler {

  faaslevels: FaaSLevel[];

  constructor(private http: HttpClient,
    private message: NzMessageService) {

    super()
    this.loadFaasLevelsFromServer();
  }

  private loadFaasLevelsFromServer(): void {

    this.faaslevels = [];

    let one: FaaSLevel = {
      id: "0",
      cpu: "1",
      mem: "512",
    };

    this.message.success('加载本地账户数据成功');
  }

  getFaaSLevels(): Observable<FaaSLevel[]> {

    let levels: FaaSLevel[] = [];

    this.http.get<WrapRes<ListData>>("").pipe(
      catchError(this.handleError<ListData>('FaaslevelService.getFaaSLevels', undefined))
    );

    return of(levels)
  }
}



