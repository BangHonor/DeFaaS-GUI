import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders  } from '@angular/common/http';

import { Observable, throwError, of } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { NzNotificationService } from 'ng-zorro-antd/notification';

import { WrapRes, ServiceErrorHandler } from '../wrap'

export interface Funccode {
  name: string,
  tag: string,
  Files: {
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

        if (res == undefined) {
          this.notification.error('加载函数数据失败', '', { nzDuration: 0 });
          return;
        }

        if (res.code != 0) {
          this.notification.error('加载函数数据失败', res.msg, { nzDuration: 0 });
          return;
        }

        let funccodes: Funccode[] = res.data;
        console.log(funccodes)
        this.funccodes = new Map(funccodes.map(funccode => [funccode.name, funccode]));  // init
        console.log(this.funccodes)//没问题
        this.notification.success('加载函数数据成功', '');
      }
    );
  }

  addFunccode(funccode: Funccode): Observable<Funccode> {
    this.http.post<WrapRes<Funccode>>("/api/funccode/add", funccode, httpOptions)
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

          this.funccodes.delete(funccode.name)
          this.funccodes.set(funccode.name, funccode);

          this.notification.success('添加Funccode成功', '');
        }
      );

    return of(funccode);
  }

  deleteFunccode(funccode: Funccode): Observable<Funccode> {

    this.http.post<WrapRes<Funccode>>("/api/funccode/delete", funccode, httpOptions)
      .pipe(
        catchError(this.handleError('deleteFunccode', undefined))
      )
      .subscribe(
        res => {
          this.funccodes.delete(funccode.name)

          this.notification.success('删除Funccode成功', '');
        }
      );

      return of(funccode);
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
