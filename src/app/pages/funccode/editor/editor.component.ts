import { Component, OnInit } from '@angular/core';

import { EditorOptions } from 'ng-zorro-antd/code-editor';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.less']
})
export class EditorComponent implements OnInit {

  code = `let str: string = 'hello';`;

  // doc see:
  // https://microsoft.github.io/monaco-editor/api/interfaces/monaco.editor.istandaloneeditorconstructionoptions.html
  editorOption: EditorOptions = {
    language: 'typescript',
    theme: 'vs-dark',
  };

  constructor() { }

  ngOnInit(): void {
  }

}
