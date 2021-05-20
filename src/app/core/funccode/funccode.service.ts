import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders  } from '@angular/common/http';

import { Observable, throwError, of } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { NzNotificationService } from 'ng-zorro-antd/notification';

import { WrapRes, ServiceErrorHandler } from '../wrap'

export interface Funccode {
  name: string,
  tag: string,
  files: {
    filename: string,
    language: string,
    code: string,
  }[],
}

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class FunccodeService extends ServiceErrorHandler {

  // name -> Funccode
  // name is a string
  funccodes: Map<string, Funccode>;

  constructor(
    private http: HttpClient,
    private notification: NzNotificationService,
  ) {

    super()
    this.loadFunccodeFromServer();
  }

  private loadFunccodeFromServer(): void {
    this.http.get<WrapRes<Funccode[]>>("/api/funccode/list")
    .pipe(
      catchError(
        this.handleError<WrapRes<Funccode[]>>('loadFunccodeFromServer', undefined)),
    )
    .subscribe(
      res => {
        console.log(res.data)//没问题

        if (res == undefined) {
          this.notification.error('加载函数数据失败', '', { nzDuration: 0 });
          return;
        }

        if (res.code != 0) {
          this.notification.error('加载函数数据失败', res.msg, { nzDuration: 0 });
          return;
        }

        let levels: Funccode[] = res.data;
        this.funccodes = new Map(levels.map(level => [level.name, level]));  // init
        console.log(this.funccodes)//没问题
        this.notification.success('加载函数数据成功', '');
      }
    );
  }

  addFunccode(level: Funccode): Observable<Funccode> {

    let newLevel: Funccode;

    this.http.post<WrapRes<Funccode>>("/api/Funccode/add", level, httpOptions)
      .pipe(
        catchError(this.handleError('addFunccode', undefined))
      )
      .subscribe(
        res => {
          if (!res) {
            this.notification.error('添加Funccode失败', '', { nzDuration: 0 });
            return;
          }

          if (res.code != 0) {
            this.notification.error('添加Funccode失败', res.msg, { nzDuration: 0 });
            return;
          }

          newLevel = res.data;
          this.funccodes.set(newLevel.name, newLevel);

          this.notification.success('添加Funccode成功', '');
        }
      );

    return of(newLevel);
  }

  getListOfFunccode(): Observable<Funccode[]> {
    return of([...this.funccodes.values()]);
  }

  getFunccode(name: string): Observable<Funccode> {

    if (!this.funccodes.has(name)) {

      this.notification.error('error', '函数代码不存在');
      return undefined;
    }

    let funccode: Funccode = this.funccodes.get(name);

    return of(funccode);
  }
}
