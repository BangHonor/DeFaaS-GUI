import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api-doc',
  templateUrl: './api-doc.component.html',
  styleUrls: ['./api-doc.component.less']
})
export class ApiDocComponent implements OnInit {

  markdownText: string = `
# API 文档
`;

  constructor() { }

  ngOnInit(): void {
  }

}
