import { Component, OnInit } from '@angular/core';


// import { MarkdownPipe } from '../../pipes/markdown/markdwon.pipe';


@Component({
  selector: 'app-user-manual',
  templateUrl: './user-manual.component.html',
  styleUrls: ['./user-manual.component.less']
})
export class UserManualComponent implements OnInit {

  markdownText: string = `
# 用户手册
## 本地账户
## 函数代码`;

  constructor() { }

  ngOnInit(): void {
  }

}
