// import { Injectable } from '@angular/core';
import { Injectable, Type } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError, of } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { NzNotificationService } from 'ng-zorro-antd/notification';


import { WrapRes, ServiceErrorHandler } from '../wrap'
import { stringify } from '@angular/compiler/src/util';

export interface Faaslevel {//Faaslevel API
  id: string;
  cpu: string;
  mem: string;
}

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class FaaslevelService extends ServiceErrorHandler {

  // id -> Faaslevel
  // id is a string
  faaslevels: Map<string, Faaslevel>;

  constructor(
    private http: HttpClient,
    private notification: NzNotificationService,
  ) {

    super()
    this.loadFaaslevelsFromServer();
  }

  private loadFaaslevelsFromServer(): void {

    this.http.get<WrapRes<Faaslevel[]>>("/api/faaslevel/list")
      .pipe(
        catchError(
          this.handleError<WrapRes<Faaslevel[]>>('loadFaaslevelsFromServer', undefined)),
      )
      .subscribe(
        res => {

          if (res == undefined) {
            this.notification.error('加载FaaS规格数据失败', '', { nzDuration: 0 });
            return;
          }

          if (res.code != 0) {
            this.notification.error('加载FaaS规格数据失败', res.msg, { nzDuration: 0 });
            return;
          }

          let levels: Faaslevel[] = res.data;
          this.faaslevels = new Map(levels.map(level => [level.id, level]));  // init

          this.notification.success('加载FaaS规格数据成功', '');
        }
      );

  }

  getListOfFaaslevel(): Observable<Faaslevel[]> {
    return of([...this.faaslevels.values()]);
  }

  addFaaslevel(level: Faaslevel): Observable<Faaslevel> {

    let newLevel: Faaslevel;

    this.http.post<WrapRes<Faaslevel>>("/api/faaslevel/add", level, httpOptions)
      .pipe(
        catchError(this.handleError('addFaaslevel', undefined))
      )
      .subscribe(
        res => {
          if (!res) {
            this.notification.error('添加FaaS规格失败', '', { nzDuration: 0 });
            return;
          }

          if (res.code != 0) {
            this.notification.error('添加FaaS规格失败', res.msg, { nzDuration: 0 });
            return;
          }

          newLevel = res.data;
          this.faaslevels.set(newLevel.id, newLevel);

          this.notification.success('添加FaaS规格成功', '');
        }
      );

    return of(newLevel);
  }

  getFaaslevel(id: string): Observable<Faaslevel> {

    if (!this.faaslevels.has(id)) {
      this.notification.error('FaaS 规格不存在', '');
      return undefined;
    }

    return of(this.faaslevels.get(id));
  }
}



