import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable, throwError, of } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { NzNotificationService } from 'ng-zorro-antd/notification';


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
    private notification: NzNotificationService,
  ) {

    super()
    this.loadFaaslevelsFromServer();
  }

  private loadFaaslevelsFromServer(): void {

    this.http.get<WrapRes<Faaslevel[]>>("/api/faaslevel/list")
      .pipe(
        catchError(
          this.handleError<WrapRes<Faaslevel[]>>('faaslevel service load', undefined)),
      )
      .subscribe(
        res => {

          if (res == undefined) {
            this.notification.error('加载FaaS规格数据失败', '');
          }

          if (res.code != 0) {
            console.log(res);
            this.notification.error('加载FaaS规格数据失败', res.msg);
            return;
          }

          let levels: Faaslevel[] = res.data;
          this.faaslevels = new Map(levels.map(level => [level.id, level]));

          console.log("this.faaslevels", this.faaslevels);

          this.notification.success('success', '加载FaaS规格数据成功');
        }
      );



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

    this.notification.success('success', '新建FaaS规格成功');

    return of(faaslevel);
  }

  getFaaslevel(id: string): Observable<Faaslevel> {

    if (!this.faaslevels.has(id)) {
      this.notification.error('error', 'FaaS 规格不存在');
      return undefined;
    }

    return of(this.faaslevels.get(id));
  }
}



