import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

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
    this.loadFunccodeFromServe();
  }

  private loadFunccodeFromServe(): void {

    this.funccodes = new Map();

    let one: Funccode = {
      name: "hello-ts",
      tag: "test",
      files: [
        {
          filename: "handler.ts",
          language: "typescript",
          code: `
handler = function(request, response, context) {
    let respBody: string = "Hello";
    response.send(respBody);
}`,
        },
      ],
    };

    let two: Funccode = {
      name: "hello-go",
      tag: "test",
      files: [
        {
          filename: "handler.go",
          language: "go",
          code: `
func handler(w http.ResponseWriter, request *http.Request) {
    w.Write("Hello");
}`,
        },
      ],
    };


    this.funccodes.set(one.name, one);
    this.funccodes.set(two.name, two);

    this.notification.success('success', '加载函数代码数据成功');
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
